import { promises as fs } from 'fs';
import path from 'path';
import { TwitterApi } from 'twitter-api-v2';
import { Octokit } from '@octokit/rest';

// Initialize clients
const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Fetch configuration from Gist
async function getConfig() {
  const gist = await octokit.gists.get({ gist_id: process.env.CONFIG_GIST_ID });
  const configFile = Object.values(gist.data.files).find(file => file.filename === 'twitter_rewards_config.csv');
  const lines = configFile.content.trim().split('\n');
  const [headers, ...rows] = lines;
  return rows.map(row => {
    const values = row.split(',');
    return {
      action_type: values[0],
      target: values[1],
      points: parseInt(values[2]),
      extra_params: values[3],
      active: values[4] === 'true'
    };
  });
}

// Get current rewards from CSV
async function getCurrentRewards() {
  const csvPath = path.join(process.cwd(), 'public', 'community_rewards.csv');
  const data = await fs.readFile(csvPath, 'utf8');
  const lines = data.trim().split('\n');
  const [headers, ...rows] = lines;
  return rows.map(row => {
    const [username, github, wallet_address, rewards, contributions] = row.split(',');
    return { username, github, wallet_address, rewards: parseInt(rewards), contributions };
  });
}

// Update rewards CSV
async function updateRewards(rewards) {
  const csvPath = path.join(process.cwd(), 'public', 'community_rewards.csv');
  const headers = 'username,github,wallet_address,rewards,contributions';
  const rows = rewards.map(r => 
    `${r.username},${r.github},${r.wallet_address},${r.rewards},${r.contributions}`
  );
  await fs.writeFile(csvPath, [headers, ...rows].join('\n'));
}

// API Routes
export async function GET() {
  try {
    const rewards = await getCurrentRewards();
    return new Response(JSON.stringify(rewards), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error getting rewards:', error);
    return new Response('Error reading rewards', { status: 500 });
  }
}

export async function POST() {
  try {
    const config = await getConfig();
    const currentRewards = await getCurrentRewards();
    let updated = false;

    for (const rule of config) {
      if (!rule.active) continue;

      if (rule.action_type === 'hashtag') {
        const query = `${rule.target} -is:retweet`;
        const tweets = await twitterClient.v2.search(query);

        for (const tweet of tweets.data || []) {
          const username = tweet.author_id;
          const user = currentRewards.find(r => r.username === username);
          
          if (user) {
            user.rewards += rule.points;
            updated = true;
          } else {
            currentRewards.push({
              username,
              github: '',
              wallet_address: '',
              rewards: rule.points,
              contributions: ''
            });
            updated = true;
          }
        }
      }
      // Ready for more action types
    }

    if (updated) {
      await updateRewards(currentRewards);
    }

    return new Response('Rewards updated', { status: 200 });
  } catch (error) {
    console.error('Error updating rewards:', error);
    return new Response('Error updating rewards', { status: 500 });
  }
}
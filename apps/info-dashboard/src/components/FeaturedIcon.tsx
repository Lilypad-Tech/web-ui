const FeaturedIcon = ({
  iconUrl,
  spinIcon,
}: {
  iconUrl: string;
  spinIcon: boolean;
}) => {
  return (
    <div className="border-uui-1 rounded-uui-lg shadow-uui-md border-uui-featured-icon-modern-border bg-uui-bg-primary w-[3rem] h-[3rem] flex items-center justify-center">
      <span
        style={{ "--icon-url": `url(${iconUrl})` }}
        className={` ${
          spinIcon ? "animate-spin" : ""
        } h-[1.5rem] w-[1.5rem] bg-uui-fg-secondary-700 group-hover:text-uui-button-primary-fg_hover hover:bg-uui-error-800 pointer-events-none [mask-position:center] [mask-size:contain] [mask-repeat:no-repeat] [mask-image:var(--icon-url)] group-[.disabled]:bg-uui-fg-disabled block`}
      />
    </div>
  );
};

export default FeaturedIcon;

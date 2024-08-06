import Button from "../Button";

const Socials = ({ data, className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap gap-2 link`}>
      {data?.socials?.map((social, index) => (
        <Button
          key={index}
          type="link"
          onClick={() => window.open(social.link)}
          classes="btn-underline pb-0.5"
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;

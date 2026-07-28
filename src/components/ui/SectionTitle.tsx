interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = true,
}: SectionTitleProps) => {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 leading-8 text-gray-600 ${
            center ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
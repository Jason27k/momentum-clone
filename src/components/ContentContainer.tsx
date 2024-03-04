import ContentSection from "./ContentSection";

interface Content {
  sectionTitle: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface ContentContainerProps {
  content: Content[];
  id: string;
}

const ContentContainer = ({ content, id }: ContentContainerProps) => {
  return (
    <div className="h-full w-full">
      {content.map((item, index) => (
        <ContentSection
          key={item.title}
          sectionTitle={item.sectionTitle}
          title={item.title}
          description={item.description}
          image={item.image}
          alt={item.alt}
          flip={index % 2 == 1}
          first={index === 0}
          id={id}
        />
      ))}
    </div>
  );
};

export default ContentContainer;

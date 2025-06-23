import { useContext } from "react";
import aboutImg from "../assets/About.png";
import { Darkmood, languageContext } from "../pages/Home";

const About = () => {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  // نصوص اللغات
  const texts = {
    en: {
      title: "About Us",
      description: "This is the content for our information page. Here you can provide information about your company or organization."
    },
    ar: {
      title: "معلومات عنا",
      description: "هذا هو المحتوى لصفحه معلومات عنا . هنا يمكنك تقديم معلومات عن شركتك أو مؤسستك "
    }
  };

  const t = texts[language] || texts.en;

  return (
    <section
      id="About"
      className={`flex items-center w-full justify-center min-h-screen px-5 py-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl">
      
        <div>
          <img
            src={aboutImg}
            alt={t.title}
            className={`rounded-lg shadow-lg ${
              darkMode ? 'shadow-purple-500/20' : 'shadow-gray-400'
            }`}
          />
        </div>

        <div className={`text-center md:text-right ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-purple-400' : 'text-purple-600'
          }`}>
            {t.title}
          </h1>
          <p className={`leading-loose ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

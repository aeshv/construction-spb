import React, { useCallback, useState } from "react";
import "./ImagesGallery.scss";
import { RxDot } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import ImageViewer from "react-simple-image-viewer";
import ProgressiveImage from "react-progressive-graceful-image";
const ImagesGallery = () => {
  const tabs = ["Бани и сауны", "Дома и пристройки", "Навесы и беседки"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = [
    [
      "http://placeimg.com/1600/600/nature",
      "http://placeimg.com/1200/800/nature",
      "http://placeimg.com/700/600/nature",
      "http://placeimg.com/900/600/nature",
      "http://placeimg.com/1200/950/nature",
      "http://placeimg.com/1200/900/nature",
    ],
    [
      "http://placeimg.com/1600/600/animals",
      "http://placeimg.com/1200/800/animals",
      "http://placeimg.com/700/600/animals",
      "http://placeimg.com/900/600/animals",
      "http://placeimg.com/1200/950/animals",
      "http://placeimg.com/1200/900/animals",
    ],
    [
      "http://placeimg.com/1600/600/architecture",
      "http://placeimg.com/1200/800/architecture",
      "http://placeimg.com/700/600/architecture",
      "http://placeimg.com/900/600/architecture",
      "http://placeimg.com/1200/950/architecture",
      "http://placeimg.com/1200/900/architecture",
    ],
  ];

  const IGText = [
    [
      "Изготавливаем бани и сауны по каркасной и брусовой технологии.",
      "Гарантируем качественную установку печей и дымоходов с соблюдением всех норм пожаробезопасности.",
      "Индивидуальный подход к каждому проекту.",
      "Подбор интерьерных решений, материала и оборудования.",
      "Купель или офуро в подарок при комплексной застройке.",
    ],
    [
      "Мы строим дома любой категории – из сухой доски, бруса, клееного бруса, газобетона, кирпича.",
      "Разновидность стилей – классический, скандинавский, шале, бунгало.",
      "Преимущество нашей компании – застройка комплексом - дом, гараж или навес, баня и все сопутствующие к ним инженерные сети.",
      "У нас можно заказать любую пристройку к вашему дому - хозяйственный блок, веранда, терраса или пергола.",
      "Наши дома соответствуют всем стандартам энергоэффективности  и СНИПам.",
      "Выполняем заказы по строительству садовых и детских домиков.",
    ],
    [
      "Навесы для машин строим из клееного бруса, что повышает прочность конструкции и придает строению красивый, эстетический вид.",
      "Можем добавить хозяйственный блок или дополнительное помещение к навесу для  хранения инструмента и вещей.",
      "Организуем въезд, смонтируем брусчатку, дренаж и ливневку.",
      "Изготавливаем квадратные, прямоугольные, шестигранные и восьмигранные беседки.",
      "Гриль беседки и гриль домики, устанавливаем электрику, выполняем отделку, устанавливаем и монтируем мебель.",
      "Складываем BBQ - комплексы.",
    ],
  ];

  const placeholder = (
    <div
      className="placeholder"
      style={{
        width: "150px",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div class="loader loader--style1" title="0">
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          enable-background="new 0 0 40 40"
        >
          <path
            opacity="0.2"
            fill="#000"
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          />
          <path
            fill="#000"
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
  return (
    <>
      <div className="IG" id="gallery">
        <div className="IG__wrapper">
          <nav>
            <ul>
              {tabs.map((item) => (
                <motion.li
                  initial={{ opacity: 0.6, y: 10 }}
                  whileInView={{ opacity: [0.6, 1], y: 0 }}
                  transition={{ duration: 0.2 }}
                  key={item}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => {
                    setSelectedTab(item);
                  }}
                >
                  {item}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence wait>
              <motion.div
                key={selectedTab ? selectedTab : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="IG__main"
              >
                <div className="IG__description">
                  <div className="IG__list-wrapper">
                    {IGText[tabs.indexOf(selectedTab)].map(
                      (textLine, index) => (
                        <motion.span
                          initial={{ opacity: 0.5 }}
                          whileInView={{ opacity: [0.5, 1] }}
                          transition={{ duration: 0.8, delay: 0.6*index }}
                          
                          key={index}
                          className={`IG__line IG__line-${index}`}
                        >
                          <RxDot /> <p>{textLine}</p>
                        </motion.span>
                      )
                    )}
                  </div>
                </div>

                <div className="IG__grid">
                  {images[tabs.indexOf(selectedTab)].map(
                    (singleImage, index) => (
                      <div key={index} className={`item item-${index}`}>
                        <ProgressiveImage src={singleImage} placeholder="">
                          {(src, loading) => {
                            return loading ? (
                              placeholder
                            ) : (
                              <motion.img
                                initial={{ opacity: 0.7 }}
                                whileInView={{ opacity: [0.7, 1] }}
                                transition={{ duration: 0.5 }}
                                className="IG__image"
                                src={src}
                                onClick={() => openImageViewer(index)}
                                alt="Наши работы"
                              />
                            );
                          }}
                        </ProgressiveImage>
                      </div>
                    )
                  )}
                  {isViewerOpen && (
                    <ImageViewer
                      src={images[tabs.indexOf(selectedTab)]}
                      currentIndex={currentImage}
                      disableScroll={true}
                      closeOnClickOutside={true}
                      onClose={closeImageViewer}
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
};

export default ImagesGallery;

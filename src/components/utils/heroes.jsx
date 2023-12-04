import elenaEsipenkoPort from "../../images/elena-esipenko.png";
import elenaEsipenkoPhoto1Big from "../../images/photos/elena_esipenko_1_big.jpg";
import elenaEsipenkoPhoto1Small from "../../images/photos/elena_esipenko_1_small.jpg";
import elenaEsipenkoPhoto2Big from "../../images/photos/elena_esipenko_2_big.jpg";
import elenaEsipenkoPhoto2Small from "../../images/photos/elena_esipenko_2_small.jpg";
import elenaEsipenkoPhoto3Big from "../../images/photos/elena_esipenko_3_big.jpg";
import elenaEsipenkoPhoto3Small from "../../images/photos/elena_esipenko_3_small.jpg";
import elenaEsipenkoPhoto4Big from "../../images/photos/elena_esipenko_4_big.jpg";
import elenaEsipenkoPhoto4Small from "../../images/photos/elena_esipenko_4_small.jpg";
import elenaEsipenkoPhoto5Big from "../../images/photos/elena_esipenko_5_big.jpg";
import elenaEsipenkoPhoto5Small from "../../images/photos/elena_esipenko_5_small.jpg";

import vitaliiLezinPort from "../../images/vitalii-lezin.png";
import vitaliiLezinPhoto1Big from "../../images/photos/vitalii_lezin_1_big.jpg";
import vitaliiLezinPhoto1Small from "../../images/photos/vitalii_lezin_1_small.jpg";
import vitaliiLezinPhoto2Big from "../../images/photos/vitalii_lezin_2_big.jpg";
import vitaliiLezinPhoto2Small from "../../images/photos/vitalii_lezin_2_small.jpg";
import vitaliiLezinPhoto3Big from "../../images/photos/vitalii_lezin_3_big.jpg";
import vitaliiLezinPhoto3Small from "../../images/photos/vitalii_lezin_3_small.jpg";
import vitaliiLezinPhoto4Big from "../../images/photos/vitalii_lezin_4_big.jpg";
import vitaliiLezinPhoto4Small from "../../images/photos/vitalii_lezin_4_small.jpg";

import gulnaraStartsevaPort from "../../images/gulnara-startseva.png";
import gulnaraStartsevaPhoto1Big from "../../images/photos/gulnara_startseva_1_big.jpg";
import gulnaraStartsevaPhoto1Small from "../../images/photos/gulnara_startseva_1_small.jpg";
import gulnaraStartsevaPhoto2Big from "../../images/photos/gulnara_startseva_2_big.jpg";
import gulnaraStartsevaPhoto2Small from "../../images/photos/gulnara_startseva_2_small.jpg";
import gulnaraStartsevaPhoto3Big from "../../images/photos/gulnara_startseva_3_big.jpg";
import gulnaraStartsevaPhoto3Small from "../../images/photos/gulnara_startseva_3_small.jpg";


const heroes = [
  {
    id: 1,
    name: "Виталий Лезин",
    title: (
      <>
        Все
        <br />
        на&nbsp;матч
      </>
    ),
    job: <>ведущий специалист<br/>по&nbsp;спортивной деятельности</>,
    portrait: vitaliiLezinPort,
    video: "3MHvqJFWr3k?si=KyK2RkeWAxO6Fmaj",
    interviewText: (
      <>
        <p>
          Для Виталия спорт&nbsp;&mdash; это&nbsp;и&nbsp;хобби, и&nbsp;работа.
          Его&nbsp;волонтерство началось с&nbsp;разовых соревнований
          и&nbsp;мастер-классов для&nbsp;детей из&nbsp;отдаленных ямальских поселков,
          позже переросло в&nbsp;интересный массовый проект
          &laquo;Все&nbsp;на&nbsp;матч&raquo;. Инициатива стала победителем конкурса
          волонтерских проектов{" "}
          <a href="https://rodnyegoroda.ru/">
            <span className="refQoutes">&laquo;</span>
            <span className="refText">Родные города</span>
            <span className="refQoutes">&raquo;</span>
          </a>{" "}
          компании &laquo;Газпром нефть&raquo;.
        </p>
        <p>
          Зачем Виталий занимается с&nbsp;детьми, как&nbsp;совмещает работу
          на&nbsp;Новопортовском промысле и&nbsp;тренировки, а&nbsp;также
          чья&nbsp;поддержка оказалась для&nbsp;него особенно важной, узнаете
          из&nbsp;интервью.
        </p>
      </>
    ),
    photos: [
      {
        id: 0,
        big: vitaliiLezinPhoto1Big,
        small: vitaliiLezinPhoto1Small,
      },
      {
        id: 1,
        big: vitaliiLezinPhoto2Big,
        small: vitaliiLezinPhoto2Small,
      },
      {
        id: 2,
        big: vitaliiLezinPhoto3Big,
        small: vitaliiLezinPhoto3Small,
      },
      {
        id: 3,
        big: vitaliiLezinPhoto4Big,
        small: vitaliiLezinPhoto4Small,
      },
    ],
  },
  {
    id: 2,
    name: "Гульнара Старцева",
    title: (
      <>
        Общее
        <br />
        дело <br />
        объединяет
      </>
    ),
    job: (
      <>
        руководитель направления<br/>
        отдела управления договорами<br/>
        по&nbsp;капитальному строительству<br/>
        и&nbsp;бурению скважин
      </>
    ),
    portrait: gulnaraStartsevaPort,
    video: "_C1DvFWpNiE?si=PQcF2ue3fmfxllGX",
    interviewText: (
      <>
        <p>
          У&nbsp;Гульнары большой опыт волонтерства. Ей&nbsp;интересно
          подключаться к&nbsp;самым разным благотворительным проектам, которые
          проводят ее&nbsp;коллеги из&nbsp;&laquo;Газпромнефть-Ямала&raquo;.
          Она&nbsp;уверена: общее дело, будь&nbsp;то экологическая акция на&nbsp;Крайнем
          Севере или&nbsp;помощь детскому дому в&nbsp;Тюмени, объединяет
          и&nbsp;сплачивает.
        </p>
        <p>
          Недавно Гульнара инициировала свой волонтерский проект&nbsp;&mdash;
          решила обучать финансовой грамотности ямальских школьников. Почему
          ей&nbsp;кажется важным развивать это&nbsp;направление и&nbsp;почему
          не&nbsp;сможет ограничиться только&nbsp;им, она&nbsp;рассказала NEFT.
        </p>
      </>
    ),
    photos: [
      {
        id: 0,
        big: gulnaraStartsevaPhoto1Big,
        small: gulnaraStartsevaPhoto1Small,
      },
      {
        id: 1,
        big: gulnaraStartsevaPhoto2Big,
        small: gulnaraStartsevaPhoto2Small,
      },
      {
        id: 2,
        big: gulnaraStartsevaPhoto3Big,
        small: gulnaraStartsevaPhoto3Small,
      },
    ],
  },
  {
    id: 3,
    name: "Елена Есипенко",
    title: <>Открыла новое в&nbsp;людях и&nbsp;в&nbsp;себе</>,
    job: <>руководитель направления<br/>в&nbsp;управлении исполнением договоров</>,
    portrait: elenaEsipenkoPort,
    video: "iaVxHVPXMFw?si=7QPHcIz4ip-7ftOs",
    interviewText: (
      <>
        <p>
          Елена много лет участвовала в&nbsp;волонтерских проектах в&nbsp;Томске
          и&nbsp;Омске. Рассказывает, что&nbsp;получает удовольствие, когда помогает
          <nobr>кому-то</nobr>. Переехав в&nbsp;Тюмень, устроилась работать
          в&nbsp;&laquo;Газпромнефть-Ямал&raquo; и&nbsp;получила поддержку
          коллег. Елена стала волонтером в&nbsp;детских домах, домах
          престарелых, а&nbsp;в&nbsp;этом году еще подключилась
          к&nbsp;всероссийскому проекту
          &laquo;28&nbsp;петель&raquo;&nbsp;&mdash; для&nbsp;помощи недоношенным
          младенцам и&nbsp;их&nbsp;мамам.
        </p>
        <p>
          Мы&nbsp;узнали, почему ей&nbsp;близко добровольчество
          и&nbsp;как&nbsp;оно&nbsp;влияет на&nbsp;ее&nbsp;профессиональную деятельность.
        </p>
      </>
    ),
    photos: [
      {
        id: 0,
        big: elenaEsipenkoPhoto1Big,
        small: elenaEsipenkoPhoto1Small,
      },
      {
        id: 1,
        big: elenaEsipenkoPhoto2Big,
        small: elenaEsipenkoPhoto2Small,
      },
      {
        id: 2,
        big: elenaEsipenkoPhoto3Big,
        small: elenaEsipenkoPhoto3Small,
      },
      {
        id: 3,
        big: elenaEsipenkoPhoto4Big,
        small: elenaEsipenkoPhoto4Small,
      },
      {
        id: 4,
        big: elenaEsipenkoPhoto5Big,
        small: elenaEsipenkoPhoto5Small,
      },
    ],
  }
];

export default heroes;

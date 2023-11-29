import elenaEsipenkoPort from "../../images/elena-esipenko.png";
import elenaEsipenkoPhoto1Big from "../../images/photos/elena_esipenko_1_big.jpg";
import elenaEsipenkoPhoto1Small from "../../images/photos/elena_esipenko_1_small.jpg";
import elenaEsipenkoPhoto2Big from "../../images/photos/elena_esipenko_2_big.jpg";
import elenaEsipenkoPhoto2Small from "../../images/photos/elena_esipenko_2_small.jpg";


const heroes = [
  {
    id: 1,
    name: "Елена Есипенко",
    title: <>Открыла новое в&nbsp;людях и&nbsp;в&nbsp;себе</>,
    job: <>руководитель направления в&nbsp;управлении исполнением договоров</>,
    portrait: elenaEsipenkoPort,
    video: "iaVxHVPXMFw?si=7QPHcIz4ip-7ftOs",
    interviewText: (
      <>
        <p className="mt_0">
          Елена много лет участвовала в&nbsp;волонтерских проектах в&nbsp;Томске
          и&nbsp;Омске. Рассказывает, что получает удовольствие, когда помогает
          кому-то. Переехав в&nbsp;Тюмень, устроилась работать
          в&nbsp;&laquo;Газпромнефть-Ямал&raquo; и&nbsp;получила поддержку
          коллег. Елена стала волонтером в&nbsp;детских домах, домах
          престарелых, а&nbsp;в&nbsp;этом году еще подключилась
          к&nbsp;всероссийскому проекту
          &laquo;28&nbsp;петель&raquo;&nbsp;&mdash; для помощи недоношенным
          младенцам и&nbsp;их&nbsp;мамам.
        </p>
        <p>
          Мы&nbsp;узнали, почему ей&nbsp;близко добровольчество и&nbsp;как оно
          влияет на&nbsp;ее&nbsp;профессиональную деятельность.
        </p>
      </>
    ),
    photos: [
      {
        id: 0,
        big: elenaEsipenkoPhoto1Big,
        small: elenaEsipenkoPhoto1Small
      },
      {
        id: 1,
        big: elenaEsipenkoPhoto2Big,
        small: elenaEsipenkoPhoto2Small
      }
    ]
  },
];

export default heroes;

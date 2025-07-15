import Image from 'next/image';
import Icon from './components/Icon';
import { faGlobe, faGraduationCap, faBolt, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="bg-gray-500 text-gray-800">
<div className="flex flex-col items-center w-full">
      {/* Header Section with Background Image and Fixed Height */}
      <section
        className="w-full bg-cover bg-center text-center h-screen flex items-center justify-center pb-[150px]"
        style={{ backgroundImage: 'url(/block_1.png)' }}
      >
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/qualifi_logo.png"
            alt="Qualifi logo"
            width={500}
            height={500}
            className="h-auto"
          />
          <h1 className="text-5xl font-semibold text-white">
            Foundation программы <span className="text-yellow-300">Qualifi</span> в Казахстане
          </h1>
        </div>
      </section>

      <section style={{ backgroundImage: 'url(/block_2_upper.png)' }} className="w-full h-8"></section>
      {/* Introduction Section */}
      <section className="w-full bg-[#a6a6a6] py-12 px-6 md:px-20 min-h-[400px]">
        <h2 className="text-2xl font-semibold mb-10 text-left">Введение в систему Qualifi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-transparent text-left">
            <p className="text-gray-600 text-lg">
              Учебные центры Qualifi в Казахстане предлагают 
              инновационную модель образования, предоставляя
              студентам возможность получения международно 
              признанных британских квалификаций без 
              необходимости выезда за границу.
            </p>
          </div>
          <div className="bg-transparent text-left">
            <p className="text-gray-600 text-lg">
              Благодаря квалификациям уровня 3, соответствующим 
              RQF, студенты получают академические и 
              профессиональные навыки и могут напрямую перейти 
              на программы уровня 4-5 или поступить на 1-й курс 
              бакалавриата университетов Великобритании.
            </p>
          </div>
          <div className="bg-transparent text-left">
            <p className="text-gray-600 text-lg">
              Foundation программы от британской организации 
              Qualifi аккредитованы Управлением по регулированию 
              квалификаций и экзаменов Великобритании (Ofqual).
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Image
          src="/block_2_lower.png"
          alt="UK and Kazakhstan Flags"
          width={1200}
          height={200}
          className="w-full h-auto"
        />
      </section>
      {/* bg-[#6b5cff]  */}

      {/* Advantages Section */}
      <section className="w-full bg-[#a6a6a6] py-12 px-6 md:px-20 min-h-[500px]">
        <h2 className="text-xl font-semibold mb-10 text-center">Преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#6b5cff] p-6 rounded-xl shadow text-left text-white">
            <h3 className="font-bold mb-2">Международные стандарты</h3>
            <p>Образование на английском языке, 
              соответствующее британским и мировым 
              стандартам качества, с современной 
              методологией обучения.
            </p>
          </div>
          <div className="bg-[#6b5cff] p-6 rounded-xl shadow text-left text-white">
            <h3 className="font-bold mb-2">Экономия</h3>
            <p>Получение уровня Foundation, обучаясь в 
              школе в Казахстане, экономит время и 
              денежные средства.
            </p>
          </div>
          <div className="bg-[#6b5cff] p-6 rounded-xl shadow text-left text-white">
            <h3 className="font-bold mb-2">Удобство</h3>
            <p>Возможность получить пререквизит
               поступление в британские вузы 
               одновременно с учебой в школе.
            </p>
          </div>
          <div className="bg-[#6b5cff] p-6 rounded-xl shadow text-left text-white">
            <h3 className="font-bold mb-2">Практическая направленность</h3>
            <p>Программы по бизнесу и цифровым 
               технологиям с акцентом на практические навыки, 
               востребованные на международном 
               рынке труда.
            </p>
          </div>
        </div>
      </section>
    </div>
  {/* Верхний фиолетовый блок по всей ширине */}
  <section className="w-full bg-[#6b5cff] h-20 md:h-28"></section>
  <section className="w-full bg-[#a6a6a6] px-4 py-16 md:px-20">
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Левая часть — заголовок */}
      <div className="lg:w-1/3 flex items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Модель академической прогрессии
        </h2>
      </div>

      {/* Правая часть */}
      <div className="lg:w-2/3 flex flex-col gap-6">
        {/* Блоки уровней */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 rounded border-l-[5px] border-[#5b2eff] bg-transparent">
            <h3 className="font-semibold text-lg text-gray-900">Уровень 3</h3>
            <p className="text-sm mt-2 text-gray-800">
              Эквивалент британских A-level, обеспечивающий поступление на 1 курс университета
            </p>
          </div>
          <div className="p-4 rounded border-l-[5px] border-[#a87fff] bg-transparent">
            <h3 className="font-semibold text-lg text-gray-900">Уровень 6 (Top-Up)</h3>
            <p className="text-sm mt-2 text-gray-800">
              Завершение бакалавриата за 1 год в партнерском университете
            </p>
          </div>
          <div className="p-4 rounded border-l-[5px] border-[#5b2eff] bg-transparent">
            <h3 className="font-semibold text-lg text-gray-900">Уровни 4–5</h3>
            <p className="text-sm mt-2 text-gray-800">
              Соответствуют 1–2 курсам британского бакалавриата
            </p>
          </div>
          <div className="p-4 rounded border-l-[5px] border-[#a87fff] bg-transparent">
            <h3 className="font-semibold text-lg text-gray-900">Уровень 7</h3>
            <p className="text-sm mt-2 text-gray-800">
              Магистерская программа с написанием диссертации
            </p>
          </div>
        </div>

        {/* Фиолетовый блок с возможностями */}
        <div className="flex gap-[10px] bg-[#6b5cff] text-white p-6 rounded-lg shadow max-w-full">
          <h4 className="font-bold text-white text-lg mb-2">
            Возможности для продолжения образования и карьеры:
          </h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Переход на дипломы уровня 4/5</li>
            <li>Поступление на 1 или завершающий курс университета</li>
            <li>Продолжение обучения в вузах Великобритании, Европы, Азии</li>
            <li>Трудоустройство в сферах IT, маркетинга, администрирования</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Нижний фиолетовый блок по всей ширине */}
  <section className="w-full bg-[#6b5cff] h-20 md:h-28"></section>

      {/* География признания */}
      <section className="bg-[#a6a6a6] py-12 px-4 md:px-20 text-gray-900">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">География признания дипломов</h2>

  <div className="flex justify-center mb-6">
    <Image src="/qualifi_logo.png" alt="Qualifi" width={200} height={60} />
  </div>

  <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
    {/* Левая колонка */}
    <ul className="text-sm space-y-3 text-left lg:w-1/4">
      <li><b>🇬🇧 Великобритания:</b> основная страна признания, более 100 университетов-партнёров</li>
      <li><b>🇪🇺 Европа:</b> Ирландия, Кипр, программы Erasmus</li>
      <li><b>🌙 Ближний Восток:</b> онлайн-программы британских университетов</li>
    </ul>

    {/* Центр — глобус */}
    <div className="lg:w-1/2 flex justify-center">
      <Image
        src="/globus.png"
        alt="Глобус"
        width={500}
        height={400}
        className="rounded-md max-w-full h-auto"
      />
    </div>

    {/* Правая колонка */}
    <ul className="text-sm space-y-3 text-left lg:w-1/4">
      <li><b>🇨🇦 Канада:</b> колледжи и университеты, включая Thompson Rivers University</li>
      <li><b>🌍 Азия:</b> Малайзия, Сингапур и другие страны региона</li>
      <li><b>🇿🇦 Африка:</b> blended MBA-программы в Южной Африке</li>
    </ul>
  </div>
</section>

      {/* Партнёрские университеты */}
      <section className="bg-white py-12 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Университеты-партнёры Qualifi</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {/* Пример логотипов. Добавьте остальные в public/logos */}
          <Image src="/aru_logo_block_6.png" alt="ARU" width={100} height={50} />
          <Image src="/university-of-east-london-logo_block_6.png" alt="East London" width={100} height={50} />
          <Image src="/uofglou_block_6.png" alt="Glouc" width={100} height={50} />
          <Image src="/de_montfort_universuty_logo_block_6.png" alt="De Montfort" width={100} height={50} />
          <Image src="/arden_university_logo_block_6.png" alt="Arden" width={80} height={40} />
          <Image src="/northumbria-logo-1_block_6.png" alt="Northumbria" width={100} height={50} />
          <Image src="/the-open-university-logo_block_6.png" alt="OU" width={100} height={50} />
          <Image src="/birmingham-city-university-logo_block_6.png" alt="Birmingham" width={100} height={50} />
          <Image src="/BPP-University-College-logo_block_6.png" alt="BPP" width={100} height={50} />
          <Image src="/Buckinghamshire-New-University-Logo_block_6.png" alt="Buckinghamshire" width={100} height={50} />
          <Image src="/cardiff-metropolitan-university_logo_block_6.png" alt="Cardiff" width={100} height={50} />
          <Image src="/glasgow-caledonian-university-gcu-vector-logo_block_6.png" alt="GCU" width={100} height={50} />
          <Image src="/2018_LBU01_PURPLE_logo_block_6.png" alt="LBU" width={100} height={50} />
          <Image src="/LJMU_Master_logo_block_6.png" alt="LJMU" width={100} height={50} />
          <Image src="/LSBU2020logo_block_6.png" alt="LSBU" width={100} height={50} />
          <Image src="/Staffs_logo_block_6.png" alt="Staffs" width={100} height={50} />
          <Image src="/bsu_logo_block_6.png" alt="Staffs" width={100} height={50} />
          <Image src="/bedforshire_logo_block_6.png" alt="Bedforshire" width={100} height={50} />
          <Image src="/university-of-bolton-logo_block_6.png" alt="Bolton" width={100} height={50} />
          <Image src="/interactive-pro-ulaw-page-logo_block_6.png" alt="UOL" width={100} height={50} />
          <Image src="/university_of_cumbria_logo_block_6.png" alt="Cumbria" width={100} height={50} />
          <Image src="/derby_univer_logo_block_6.png" alt="Derby" width={100} height={50} />
          <Image src="/desktop_university-of-huddersfield-239-logo.png" alt="Huddersfield" width={100} height={50} />
          <Image src="/University_of_Chichester_full_colour_logo_block_6.png" alt="Chichester" width={100} height={50} />
          <Image src="/lincoln-Logo_block_6.png" alt="Lincoln" width={100} height={50} />
          <Image src="/une_logo_block_6.png" alt="UNE" width={100} height={50} />
          <Image src="/University_of_Portsmouth_Logo_block_6.png" alt="Portsmouth" width={100} height={50} />
          <Image src="/University_of_Suffolk_Logo_block_6.png" alt="Suffolk" width={100} height={50} />
          <Image src="/bangor_logo_block_6.png" alt="Bangor" width={100} height={50} />
          <Image src="/wolverhampton_logo_block_6.png" alt="Wolverhampton" width={100} height={50} />
          <Image src="/prifysgol_logo_block_6.png" alt="Prifysgol" width={100} height={50} />
          <Image src="/UOCL_logo_block_6.png" alt="UOCL" width={100} height={50} />
          <Image src="/univer_leichester_logo_block_6.png" alt="Leichester" width={100} height={50} />
        </div>
      </section>

       {/* Годичная программа обучения */}
      <section className="bg-[#a6a6a6] relative py-10 px-4 md:px-16 overflow-hidden min-h-[750px]">
  {/* Заголовок */}
  <h2 className="text-2xl md:text-4xl font-bold text-[#6b5cff] mb-8 z-10 relative">
    Marketing Product 1: Годичная программа обучения
  </h2>

  {/* Сетка основного контента */}
  <div className="relative grid md:grid-cols-2 gap-10 z-10">
    {/* Левая колонка */}
    <div className="relative z-10">
      {/* Блок "Для студентов партнёрских вузов" */}
      <div className="relative mb-10">
        <div className="absolute top-0 left-[-20px] w-[230%] h-[180px] bg-[#6b5cff] rounded-bl-2xl rounded-tl-2xl z-0 md:w-[250%] md:h-[265px]" />
        <div className="relative z-10 text-white px-6 py-6">
          <h3 className="text-xl font-semibold mb-2">Для студентов партнёрских вузов</h3>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Продолжительность: 1 учебный год</li>
            <li>Формат: 4 четверти × 9 недель</li>
            <li>Количество курсов: 12 (по 3 курса в каждой четверти)</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Правая колонка — изображения (только на экранах > 1000px) */}
    <div className="relative hidden lg:flex justify-center items-start pt-[80px] px-2 z-10 w-full">
      <div className="bg-white rounded-[32px] px-6 py-6 shadow-lg w-full max-w-[700px] flex flex-wrap justify-center items-center gap-6 overflow-hidden">
        <div className="w-full sm:w-1/2 max-w-[300px]">
          <Image
            src="/calendar.png"
            alt="Academic Calendar"
            width={400}
            height={400}
            className="w-full h-auto rounded shadow-md"
          />
        </div>
        <div className="w-full sm:w-1/2 max-w-[300px]">
          <Image
            src="/curriculum.png"
            alt="Curriculum"
            width={400}
            height={400}
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Абсолютно прижатый к левому нижнему углу блок "Структура одной четверти" */}
  <div className="absolute bottom-0 left-0 w-[90%] max-w-[500px] z-10">
    {/* Фоновый прямоугольник */}
    <div className="absolute top-0 left-0 w-full h-full bg-[#6b5cff] rounded-tr-[40px] -z-10" />
    <div className="relative text-white px-6 py-6 z-10">
      <h3 className="text-xl font-semibold mb-2">Структура одной четверти:</h3>
      <p>8 недель обучения + 1 неделя итоговой оценки</p>
      <p>3 курса одновременно</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Недельная нагрузка:</h3>
      <ul className="list-disc list-inside">
        <li>Лекции — 6 часов</li>
        <li>Семинары — 6 часов</li>
        <li>Проектная работа — 3 часа</li>
      </ul>
      <p className="mt-2 font-semibold">Итого: 15 часов в неделю</p>
      <p>Общая нагрузка на 1 курс за четверть: 45 часов</p>
    </div>
  </div>
</section>


      {/* Преимущества годичной программы */}
      <section className="bg-[#a6a6a6]">
  <div className="grid md:grid-cols-2 items-center">
    {/* Контейнер для изображения - скрыт на мобильных, 50% ширины на десктопе */}
    <div className="hidden md:block w-full">
      <div className="w-full h-full flex justify-center">
        <Image
          src="/block_8_students.png"
          alt="Students"
          width={400}
          height={400}
          className="w-full max-w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* Блок с преимуществами - всегда 100% ширины на мобильных, 50% на десктопе */}
    <div className="w-full md:p-[20px]">
  <h3 className="text-4xl font-bold text-[#6b5cff] mb-20">Преимущества годичной программы</h3>
  
  {/* Grid-контейнер */}
  <ul className="grid gap-6 text-lg">
    {/* Пункт 1 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faGlobe} className="w-10 h-10" /> {/* Фиксированный размер */}
      </div>
      <div>
        <strong className="text-lg font-semibold block">Международное признание</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Быстрое получение международно признанного диплома за 1 год обучения по 
          британским стандартам качества
        </p>
      </div>
    </li>

    {/* Пункт 2 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faGraduationCap} className="w-10 h-10" />
      </div>
      <div>
        <strong className="text-lg font-semibold block">Интенсивная подготовка</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Академически насыщенная программа, формирующая навыки самостоятельного 
          обучения и исследовательской работы
        </p>
      </div>
    </li>

    {/* Пункт 3 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faBolt} className="w-10 h-10" />
      </div>
      <div>
        <strong className="text-lg font-semibold block">Ускоренное поступление</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Идеально подходит для студентов, желающих поступить в зарубежные вузы 
          в краткие сроки
        </p>
      </div>
    </li>

    {/* Пункт 4 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faClock} className="w-10 h-10" />
      </div>
      <div>
        <strong className="text-lg font-semibold block">Гибкий формат</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Возможность обучения как очно, так и онлайн, что позволяет совмещать 
          с другими видами деятельности
        </p>
      </div>
    </li>
  </ul>
</div>
  </div>
</section>
      {/* Двухгодичная программа обучения */}
<section className="bg-[#a6a6a6] px-4 py-10 md:px-16 min-h-[700px]">
  <div className="max-w-7xl mx-auto">
    {/* Заголовок */}
    <h2 className="text-2xl md:text-4xl font-bold text-[#7f7fff] mb-6 md:mb-10 md:w-[55%]">
      Marketing Product 2:<br />
      Двухгодичная программа обучения
    </h2>

    <div className="flex flex-col md:flex-row gap-6">
      {/* Блок для 10 класса */}
      <div className="bg-[#7f7fff] text-white p-6 rounded-2xl md:w-1/2">
        <h3 className="text-lg font-bold mb-4">Для учеников 10 класса.</h3>
        <p className="font-semibold mb-2">Первый год обучения:</p>
        <ul className="list-disc list-inside mb-4 text-sm leading-relaxed">
          <li>Продолжительность: 4 школьные четверти</li>
          <li>Количество курсов: 6 в течение учебного года</li>
          <li>1 курс в 1-й четверти, 1 курс во 2-й</li>
          <li>2 курса в 3-й четверти, 2 курса в 4-й</li>
        </ul>
        <p className="font-semibold mb-2">Летние курсы (Опционально)</p>
        <ul className="list-disc list-inside text-sm leading-relaxed">
          <li>2 курса в Summer School in the UK</li>
          <li>2 курса + подготовка к IELTS в Summer Camp Kazakhstan</li>
        </ul>
      </div>

      {/* Блок второго года обучения */}
      <div className="bg-[#7f7fff] text-white p-6 rounded-2xl md:w-1/2">
        <h3 className="text-lg font-bold mb-4">Второй год обучения:</h3>
        <ul className="list-disc list-inside text-sm leading-relaxed mb-4">
          <li>Продолжительность: 2 четверти</li>
          <li>Количество курсов: 4</li>
          <li>2 курса в 1-й четверти</li>
          <li>2 курса во 2-й четверти</li>
        </ul>
        <p className="text-yellow-300 text-sm font-bold leading-relaxed">
          Программа идеально адаптирована под школьный график и позволяет параллельно получать британское образование.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#a6a6a6]">
  <div className="grid md:grid-cols-2 items-center">
    {/* Контейнер для изображения - скрыт на мобильных, 50% ширины на десктопе */}
    <div className="hidden md:block w-full">
      <div className="w-full h-full flex justify-center">
        <Image
          src="/student_block_10.png"
          alt="Student"
          width={400}
          height={400}
          className="w-full max-w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* Блок с преимуществами - всегда 100% ширины на мобильных, 50% на десктопе */}
    <div className="w-full md:p-[20px]">
  <h3 className="text-4xl font-bold text-[#6b5cff] mb-20">Преимущества двухгодичной программы</h3>
  
  {/* Grid-контейнер */}
  <ul className="grid gap-6 text-lg">
    {/* Пункт 1 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faGlobe} className="w-10 h-10" /> {/* Фиксированный размер */}
      </div>
      <div>
        <strong className="text-lg font-semibold block">Совмещение со школой</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Возможность параллельного обучения с
          основной школьной программой без
          чрезмерной нагрузки
        </p>
      </div>
    </li>

    {/* Пункт 2 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faGraduationCap} className="w-10 h-10" />
      </div>
      <div>
        <strong className="text-lg font-semibold block">Языковая подготовка</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Поддержка английского языка и
          целенаправленная подготовка к IELTS в течение
          всей программы
        </p>
      </div>
    </li>

    {/* Пункт 3 */}
    <li className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <div className="text-[#6b5cff] text-4xl flex-shrink-0 pt-1">
        <Icon icon={faBolt} className="w-10 h-10" />
      </div>
      <div>
        <strong className="text-lg font-semibold block">Международный опыт</strong>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Возможность пройти часть программы в летних
          школах университетов Великобритании
        </p>
      </div>
    </li>
  </ul>
  <p className="text-gray-600 mt-2 leading-relaxed">
          Программа создает идеальный старт для построения 
          академической траектории с 10 класса и формирует
          конкурентные преимущества при поступлении в вузы.
  </p>
</div>
  </div>
</section>

      {/* Таблица */}
      <section className="bg-[#999CF4] py-10 px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">
            Сравнение образовательных продуктов
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-100 text-sm text-gray-700">
                <tr>
                  <th className="p-4 text-left"> </th>
                  <th className="p-4 text-left">Двухгодичная программа</th>
                  <th className="p-4 text-left">Годичная программа</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800 text-white bg-black">
                <tr className="border-t">
                  <td className="p-4">Продолжительность обучения</td>
                  <td className="p-4">7 четвертей (term)</td>
                  <td className="p-4">4 четверти (term)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Количество курсов</td>
                  <td className="p-4">12 (8 в 1-й год + 4 во 2-й год)</td>
                  <td className="p-4">12</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Формат обучения</td>
                  <td className="p-4">Онлайн/Очно</td>
                  <td className="p-4">Онлайн/Очно</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Язык обучения</td>
                  <td className="p-4">Английский</td>
                  <td className="p-4">Английский</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Дополнительно</td>
                  <td className="p-4">Летние программы (2 UK, 2 KZ)</td>
                  <td className="p-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white text-center text-sm mt-6">
            Оба продукта предлагают полноценное британское образование, адаптированное под разные потребности учащихся.
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row bg-[#b3b3b3] rounded-xl shadow-md overflow-hidden p-[100px]">
        <div className="flex-1 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#8876ff]">
            Qualifi Level 3 Integrated Diploma<br /> in Business and Management
          </h2>

          <div>
            <h3 className="font-semibold mb-2">Структура программы:</h3>
            <p className="text-sm">12 курсов, объединенных в 4 модуля:</p>
            <ul className="mt-2 space-y-1 text-sm text-[#8876ff]">
              <li><strong>Business Foundations</strong><span className="text-gray-800"> — Основы бизнеса, экономики и финансов</span></li>
              <li><strong>People, Leadership, and Culture</strong><span className="text-gray-800"> — Управление персоналом, лидерство и корпоративная культура</span></li>
              <li><strong>Communication, Marketing and Entrepreneurship</strong><span className="text-gray-800"> — Коммуникация, маркетинг и предпринимательство</span></li>
              <li><strong>Workplace Support and Resources</strong><span className="text-gray-800"> — Ресурсы и поддержка рабочего процесса</span></li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col items-center space-y-4">
          <Image
            src="/block_12.png"
            alt="Diploma Booklet"
            width={500}
            height={300}
            className="rounded-xl"
          />
          <div className="flex flex-row gap-[10px] pl-[120px]">
            <div>
              <h3 className="font-semibold text-[#5f88ff] mb-1">Возможности прогрессии:</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Переход на уровень 4/5 Qualifi</li>
                <li>Поступление в университет Великобритании</li>
                <li>Трудоустройство в сфере бизнеса</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#5f88ff] mb-1">Форматы обучения:</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Годичное интенсивное обучение</li>
                <li>Двугодичное обучение с летними школами</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: IT Diploma */}
      <section className="flex flex-col lg:flex-row-reverse bg-[#d4d4d4] rounded-xl shadow-md overflow-hidden">
        <div className="flex-1 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#8876ff]">
            Qualifi Level 3 Diploma in<br /> Information Technology
          </h2>

          <div>
            <h3 className="font-semibold mb-2">Структура программы:</h3>
            <p className="text-sm">6 курсов, объединенных в 2 модуля:</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Компьютерные системы и сети</li>
              <li>Разработка программного обеспечения</li>
              <li>Базы данных</li>
              <li>Интернет-технологии</li>
              <li>Кибербезопасность</li>
              <li>Профессиональная практика в IT</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#5f88ff] mb-1">Возможности прогрессии:</h3>
            <ul className="text-sm list-disc list-inside">
              <li>Переход на уровень 4/5 в сфере IT</li>
              <li>Поступление на IT-бакалавриат</li>
            </ul>
            <p className="text-sm italic text-gray-600 mt-1">Доступно только в формате годичного обучения</p>
          </div>
        </div>

        <div className="flex-1 p-4 flex items-center justify-center">
          <Image
            src="/block_13.png"
            alt="IT Setup"
            width={500}
            height={300}
            className="rounded-xl w-full"
          />
        </div>
      </section>
    </main>
  );
}

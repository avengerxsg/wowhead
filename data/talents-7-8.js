$WowheadTalentCalculator.registerClass(7, [
{
	n: 'Стихии',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Заклинатель, который подчиняет себе разрушительные силы стихий.',
		spells: [
			{id:51490,name:'Гром и молния',icon:'spell_shaman_thunderstorm'},
			{id:60188,name:'Неистовство стихий',icon:'spell_fire_volcano'},
			{id:62099,name:'Шаманство',icon:'spell_unused2'}
		],
		rating: [
			{id:77222,name:'Волнение стихий',description:'<!--sp77222:0-->При произнесении заклинаний "Молния", "Цепная молния" или "Выброс лавы" вы с вероятностью 16% можете поразить противника вторым таким же заклинанием. Второе заклинание не требует затрат маны, наносит 75% урона и не создает угрозы. Каждое очко искусности дополнительно повышает вероятность срабатывания "Волнения стихий" на 2%.<!--sp77222-->'}
		]
	},
	icon: 'spell_nature_lightning',
	t: [
	{
		i: 11218,
		n: 'Догадливость',
		m: 3,
		s: [17485,17486,17487],
		d: [
			'Повышает вероятность критического эффекта всех заклинаний и атак на 1%.',
			'Повышает вероятность критического эффекта всех заклинаний и атак на 2%.',
			'Повышает вероятность критического эффекта всех заклинаний и атак на 3%.'
		],
		j: [
			{mlecritstrkpct:1,rgdcritstrkpct:1,holsplcritstrkpct:1,firsplcritstrkpct:1,natsplcritstrkpct:1,frosplcritstrkpct:1,shasplcritstrkpct:1,arcsplcritstrkpct:1},
			{mlecritstrkpct:2,rgdcritstrkpct:2,holsplcritstrkpct:2,firsplcritstrkpct:2,natsplcritstrkpct:2,frosplcritstrkpct:2,shasplcritstrkpct:2,arcsplcritstrkpct:2},
			{mlecritstrkpct:3,rgdcritstrkpct:3,holsplcritstrkpct:3,firsplcritstrkpct:3,natsplcritstrkpct:3,frosplcritstrkpct:3,shasplcritstrkpct:3,arcsplcritstrkpct:3}
		],
		x: 0,
		y: 0
	},
	{
		i: 564,
		n: 'Конвекция',
		m: 2,
		s: [16039,16109],
		d: [
			'Снижает затраты маны на атакующие заклинания на 5%.',
			'Снижает затраты маны на атакующие заклинания на 10%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 563,
		n: 'Контузия',
		m: 3,
		s: [16035,16105,16106],
		d: [
			'Увеличивает урон, наносимый вашими заклинаниями "Молния", "Цепная молния", "Гром и молния", "Выброс лавы" и заклинаниями категории "Шок", на 2%.',
			'Увеличивает урон, наносимый вашими заклинаниями "Молния", "Цепная молния", "Гром и молния", "Выброс лавы" и заклинаниями категории "Шок", на 4%.',
			'Увеличивает урон, наносимый вашими заклинаниями "Молния", "Цепная молния", "Гром и молния", "Выброс лавы" и заклинаниями категории "Шок", на 6%.'
		],
		x: 2,
		y: 0
	},
	{
		i: 561,
		n: 'Зов пламени',
		m: 2,
		s: [16038,16160],
		d: [
			'Увеличивает урон, наносимый вашими тотемами огня и заклинанием "Кольцо огня", на 10%, а урон, наносимый заклинанием "Выброс лавы", на 5%.',
			'Увеличивает урон, наносимый вашими тотемами огня и заклинанием "Кольцо огня", на 20%, а урон, наносимый заклинанием "Выброс лавы", на 10%.'
		],
		x: 0,
		y: 1
	},
	{
		i: 1640,
		n: 'Защита от стихий',
		m: 3,
		s: [28996,28997,28998],
		d: [
			'Уменьшает получаемый магический урон на 4%.',
			'Уменьшает получаемый магический урон на 8%.',
			'Уменьшает получаемый магический урон на 12%.'
		],
		j: [
			{_holdmgpct:-4,_firdmgpct:-4,_natdmgpct:-4,_frodmgpct:-4,_shadmgpct:-4,_arcdmgpct:-4},
			{_holdmgpct:-8,_firdmgpct:-8,_natdmgpct:-8,_frodmgpct:-8,_shadmgpct:-8,_arcdmgpct:-8},
			{_holdmgpct:-12,_firdmgpct:-12,_natdmgpct:-12,_frodmgpct:-12,_shadmgpct:-12,_arcdmgpct:-12}
		],
		x: 1,
		y: 1
	},
	{
		i: 575,
		n: 'Отзвук',
		m: 2,
		s: [16040,16113],
		d: [
			'Сокращает время восстановления заклинаний категории "Шок" и заклинания "Пронизывающий ветер" на 0 сек.',
			'Сокращает время восстановления заклинаний категории "Шок" и заклинания "Пронизывающий ветер" на 1 сек.'
		],
		x: 2,
		y: 1
	},
	{
		i: 1685,
		n: 'Точность стихий',
		m: 3,
		s: [30672,30673,30674],
		d: [
			'Увеличивает наносимый урон от огня, магии льда и сил природы на 1% и повышает рейтинг меткости заклинаний на 33% от показателя духа, получаемого за счет предметов и эффектов.',
			'Увеличивает наносимый урон от огня, магии льда и сил природы на 2% и повышает рейтинг меткости заклинаний на 66% от показателя духа, получаемого за счет предметов и эффектов.',
			'Увеличивает наносимый урон от огня, магии льда и сил природы на 3% и повышает рейтинг меткости заклинаний на 100% от показателя духа, получаемого за счет предметов и эффектов.'
		],
		j: [
			{firdmgpct:1,natdmgpct:1,frodmgpct:1,splhitrtng:[33/100,'percentOf','spi']},
			{firdmgpct:2,natdmgpct:2,frodmgpct:2,splhitrtng:[66/100,'percentOf','spi']},
			{firdmgpct:3,natdmgpct:3,frodmgpct:3,splhitrtng:[100/100,'percentOf','spi']}
		],
		x: 3,
		y: 1
	},
	{
		i: 11767,
		n: 'Громовые раскаты',
		m: 2,
		s: [88756,88764],
		d: [
			'Когда шаман наносит урон заклинаниями "Молния" или "Цепная молния" при действующей способности "Щит молний", он с вероятностью 30% восполняет 2% своего запаса маны и создает дополнительный заряд "Щита молний". Максимальное количество зарядов не может превышать 9.',
			'Когда шаман наносит урон заклинаниями "Молния" или "Цепная молния" при действующей способности "Щит молний", он с вероятностью 60% восполняет 2% своего запаса маны и создает дополнительный заряд "Щита молний". Максимальное количество зарядов не может превышать 9.'
		],
		x: 0,
		y: 2
	},
	{
		i: 574,
		n: 'Средоточие стихий',
		m: 1,
		s: [16164],
		d: [
			'После нанесения непериодического критического урона от огня, льда или сил природы вы входите в состояние "Ясность мысли", снижающее затраты маны на произнесение следующих 2 целительных или наносящих урон заклинаний:целительных или наносящих урон заклинаний на 40%.'
		],
		x: 1,
		y: 2
	},
	{
		i: 1641,
		n: 'Предел стихий',
		m: 2,
		s: [28999,29000],
		d: [
			'Увеличивает дальность действия заклинаний "Молния", "Цепная молния", "Кольцо огня" и "Выброс лавы" на 5 м, а заклинаний категории "Шок" и опаляющего тотема – на 7 м.',
			'Увеличивает дальность действия заклинаний "Молния", "Цепная молния", "Кольцо огня" и "Выброс лавы" на 10 м, а заклинаний категории "Шок" и опаляющего тотема – на 15 м.'
		],
		x: 2,
		y: 2
	},
	{
		i: 2049,
		n: 'Клятва стихий',
		m: 2,
		s: [51466,51470],
		d: [
			'Эффект "Ясность мысли", вызванный талантом "Средоточие стихий", увеличивает урон от ваших заклинаний на 5%. Вероятность нанесения критического удара участниками вашей группы или рейда в радиусе 100 м от вас увеличится на 3%.',
			'Эффект "Ясность мысли", вызванный талантом "Средоточие стихий", увеличивает урон от ваших заклинаний на 10%. Вероятность нанесения критического удара участниками вашей группы или рейда в радиусе 100 м от вас увеличится на 5%.'
		],
		j: [
			{mlecritstrkpct:3,rgdcritstrkpct:3,holsplcritstrkpct:3,firsplcritstrkpct:3,natsplcritstrkpct:3,frosplcritstrkpct:3,shasplcritstrkpct:3,arcsplcritstrkpct:3},
			{mlecritstrkpct:5,rgdcritstrkpct:5,holsplcritstrkpct:5,firsplcritstrkpct:5,natsplcritstrkpct:5,frosplcritstrkpct:5,shasplcritstrkpct:5,arcsplcritstrkpct:5}
		],
		x: 1,
		y: 3,
		r: [8,1]
	},
	{
		i: 2051,
		n: 'Потоки лавы',
		m: 3,
		s: [51480,51481,51482],
		d: [
			'Увеличивает дополнительный урон при критическом эффекте заклинания "Выброс лавы" на 6%, а периодический урон от заклинания "Огненный шок" – на 20%. При рассеивании наложенного вами заклинания "Огненный шок" ваша скорость произнесения заклинаний повышается на 10% на 6 сек.',
			'Увеличивает дополнительный урон при критическом эффекте заклинания "Выброс лавы" на 12%, а периодический урон от заклинания "Огненный шок" – на 40%. При рассеивании наложенного вами заклинания "Огненный шок" ваша скорость произнесения заклинаний повышается на 20% на 6 сек.',
			'Увеличивает дополнительный урон при критическом эффекте заклинания "Выброс лавы" на 24%, а периодический урон от заклинания "Огненный шок" – на 60%. При рассеивании наложенного вами заклинания "Огненный шок" ваша скорость произнесения заклинаний повышается на 30% на 6 сек.'
		],
		x: 2,
		y: 3
	},
	{
		i: 11769,
		n: 'Сверкание',
		m: 1,
		s: [88766],
		d: [
			'Если количество зарядов "Щита молний" превышает 3, заклинание "Земной шок" поглощает все избыточные заряды, моментально нанося противнику суммарный урон от них.'
		],
		x: 0,
		y: 4,
		r: [7,2]
	},
	{
		i: 573,
		n: 'Покорение стихий',
		m: 1,
		s: [16166],
		d: [
			'Следующее заклинание "Молния", "Цепная молния" или "Выброс лавы" произносится мгновенно. Наносимый урон от огня, магии льда и сил природы увеличивается на 15%<!--sp55452:0--><!--sp55452-->, а скорость произнесения заклинаний повышается на 20% на 15 сек.'
		],
		t: ['Восстановление: 3 мин'],
		x: 1,
		y: 4
	},
	{
		i: 11768,
		n: 'Земной захват',
		m: 2,
		s: [51483,51485],
		d: [
			'В момент создания тотем оков земли с вероятностью 50% может оплести противников на 5 сек.',
			'В момент создания тотем оков земли с вероятностью 100% может оплести противников на 5 сек.'
		],
		x: 2,
		y: 4
	},
	{
		i: 5565,
		n: 'Тотемная ярость',
		m: 1,
		s: [77746],
		d: [
			'Ваши огненные тотемы увеличивают силу заклинаний участников группы и рейда, находящихся в радиусе 100 м, на 10%.'
		],
		x: 3,
		y: 4
	},
	{
		i: 11368,
		n: 'Ответная реакция',
		m: 3,
		s: [86183,86184,86185],
		d: [
			'Применение заклинаний "Молния" и "Цепная молния" уменьшает оставшееся время восстановления способности "Покорение стихий" на 1 сек.',
			'Применение заклинаний "Молния" и "Цепная молния" уменьшает оставшееся время восстановления способности "Покорение стихий" на 2 сек.',
			'Применение заклинаний "Молния" и "Цепная молния" уменьшает оставшееся время восстановления способности "Покорение стихий" на 3 сек.'
		],
		x: 1,
		y: 5,
		r: [13,1]
	},
	{
		i: 5566,
		n: 'Волна лавы',
		m: 2,
		s: [77755,77756],
		d: [
			'Заклинание "Огненный шок" на каждом такте с вероятностью 10% может мгновенно завершить восстановление заклинания "Выброс лавы".',
			'Заклинание "Огненный шок" на каждом такте с вероятностью 20% может мгновенно завершить восстановление заклинания "Выброс лавы".'
		],
		x: 2,
		y: 5
	},
	{
		i: 1687,
		n: 'Землетрясение',
		m: 1,
		s: [61882],
		d: [
			'Вы вызываете в выбранной области землетрясение, наносящее <!--pts1-->325<!----> ед. физического урона раз в 1 сек. всем противникам в радиусе 8 м и с вероятностью 10% сбивающее их с ног. Время действия – 10 сек.'
		],
		t: ['<table width="100%"><tr><td>60% от базовой Мана</td><th>Радиус действия: 35 м</th></tr></table><table width="100%"><tr><td>Применение: 2.5 сек.</td><th>Восстановление: 10 сек.</th></tr></table>'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Совершенствование',
	color: '#FF0000',
	role: 8,
	mastery: {
		description: 'Боец, использующий тотемы и разящий врагов оружием, усиленным духами стихий.',
		spells: [
			{id:60103,name:'Вскипание лавы',icon:'ability_shaman_lavalash'},
			{id:30814,name:'Острота ума',icon:'spell_nature_mentalquickness'},
			{id:86629,name:'Бой двумя оружиями',icon:'ability_dualwield'},
			{id:51522,name:'Изначальная мудрость',icon:'spell_shaman_spectraltransformation'}
		],
		rating: [
			{id:77223,name:'Великая сила стихий',description:'<!--sp77223:0-->Увеличивает весь урон от огня, магии льда и сил природы на 20%. Каждое очко искусности дополнительно увеличивает урон на 2.5%<!--sp77223-->'}
		]
	},
	icon: 'spell_nature_lightningshield',
	t: [
	{
		i: 611,
		n: 'Оружие стихий',
		m: 2,
		s: [16266,29079],
		d: [
			'Увеличивает пассивные бонусы от заклинаний "Оружие языка пламени" и "Оружие жизни земли" на 20%, увеличивает урон от дополнительных атак за счет заклинания "Оружие неистовства ветра" на 20% и усиливает текущий эффект способности "Высвободить чары стихий" на 25%.',
			'Увеличивает пассивные бонусы от заклинаний "Оружие языка пламени" и "Оружие жизни земли" на 40%, увеличивает урон от дополнительных атак за счет заклинания "Оружие неистовства ветра" на 40% и усиливает текущий эффект способности "Высвободить чары стихий" на 50%.'
		],
		x: 0,
		y: 0
	},
	{
		i: 5560,
		n: 'Сосредоточенные удары',
		m: 3,
		s: [77536,77537,77538],
		d: [
			'Увеличивает урон, наносимый способностями "Стихийный удар" и "Удар бури" на 15%.',
			'Увеличивает урон, наносимый способностями "Стихийный удар" и "Удар бури" на 30%.',
			'Увеличивает урон, наносимый способностями "Стихийный удар" и "Удар бури" на 45%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 607,
		n: 'Улучшенные щиты',
		m: 3,
		s: [16261,16290,51881],
		d: [
			'Увеличивает урон, наносимый зарядами заклинания "Щит молний", на 5%, количество маны, получаемое от зарядов заклинания "Водный щит", на 5% и количество здоровья, восстанавливаемое зарядами заклинания "Щит земли", на 5%.',
			'Увеличивает урон, наносимый зарядами заклинания "Щит молний", на 10%, количество маны, получаемое от зарядов заклинания "Водный щит", на 10% и количество здоровья, восстанавливаемое зарядами заклинания "Щит земли", на 10%.',
			'Увеличивает урон, наносимый зарядами заклинания "Щит молний", на 15%, количество маны, получаемое от зарядов заклинания "Водный щит", на 15% и количество здоровья, восстанавливаемое зарядами заклинания "Щит земли", на 15%.'
		],
		x: 2,
		y: 0
	},
	{
		i: 11216,
		n: 'Стихийное опустошение',
		m: 3,
		s: [30160,29179,29180],
		d: [
			'При нанесении критического урона непериодическим заклинанием вероятность нанести критический удар в ближнем бою повышается на 3% на 10 сек.',
			'При нанесении критического урона непериодическим заклинанием вероятность нанести критический удар в ближнем бою повышается на 6% на 10 сек.',
			'При нанесении критического урона непериодическим заклинанием вероятность нанести критический удар в ближнем бою повышается на 9% на 10 сек.'
		],
		x: 0,
		y: 1
	},
	{
		i: 602,
		n: 'Шквал',
		m: 3,
		s: [16256,16281,16282],
		d: [
			'После нанесения критического удара скорость атаки для следующих трех выпадов повышается на 10%.',
			'После нанесения критического удара скорость атаки для следующих трех выпадов повышается на 20%.',
			'После нанесения критического удара скорость атаки для следующих трех выпадов повышается на 30%.'
		],
		x: 1,
		y: 1
	},
	{
		i: 605,
		n: 'Быстрота духов предков',
		m: 2,
		s: [16262,16287],
		d: [
			'Сокращает время произнесения заклинания "Призрачный волк" на 1 сек. и повышает скорость передвижения на 7%. Не суммируется с другими эффектами, повышающими скорость передвижения.',
			'Сокращает время произнесения заклинания "Призрачный волк" на 2 сек. и повышает скорость передвижения на 15%. Не суммируется с другими эффектами, повышающими скорость передвижения.'
		],
		x: 2,
		y: 1
	},
	{
		i: 11432,
		n: 'Предел сил тотемов',
		m: 2,
		s: [86935,86936],
		d: [
			'Увеличивает радиус действия тотемов на 15%.',
			'Увеличивает радиус действия тотемов на 30%.'
		],
		x: 3,
		y: 1
	},
	{
		i: 615,
		n: 'Крепость',
		m: 3,
		s: [16252,16306,16307],
		d: [
			'Повышает выносливость на 3% и сокращает время действия наложенных на вас замедляющих передвижение эффектов на 10%.',
			'Повышает выносливость на 7% и сокращает время действия наложенных на вас замедляющих передвижение эффектов на 20%.',
			'Повышает выносливость на 10% и сокращает время действия наложенных на вас замедляющих передвижение эффектов на 30%.'
		],
		j: [
			{sta:[3/100,'percentOf','sta']},
			{sta:[7/100,'percentOf','sta']},
			{sta:[10/100,'percentOf','sta']}
		],
		x: 0,
		y: 2
	},
	{
		i: 901,
		n: 'Удар бури',
		m: 1,
		s: [17364],
		d: [
			'Мгновенная атака оружием в обеих руках, наносящая противнику 125% урона от оружия. Вероятность критического эффекта заклинаний "Молния", "Цепная молния", "Щит молний" и "Земной шок", направленных против этого же противника, повышается на 25% на 15 сек.'
		],
		t: ['<table width="100%"><tr><td>8% от базовой Мана</td><th>Дистанция ближнего боя</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 8 сек.</th></tr></table>','Требуется: Оружие ближнего боя'],
		x: 1,
		y: 2
	},
	{
		i: 2055,
		n: 'Статический шок',
		m: 3,
		s: [51525,51526,51527],
		d: [
			'Используя способности "Стихийный удар", "Удар бури" или "Вскипание лавы" при действующем "Щите молний" вы с вероятностью 15% наносите урон от одного заряда щита, не расходуя его.',
			'Используя способности "Стихийный удар", "Удар бури" или "Вскипание лавы" при действующем "Щите молний" вы с вероятностью 30% наносите урон от одного заряда щита, не расходуя его.',
			'Используя способности "Стихийный удар", "Удар бури" или "Вскипание лавы" при действующем "Щите молний" вы с вероятностью 45% наносите урон от одного заряда щита, не расходуя его.'
		],
		x: 2,
		y: 2
	},
	{
		i: 11220,
		n: 'Мощь льдов',
		m: 2,
		s: [63373,63374],
		d: [
			'Увеличивает урон, наносимый заклинаниями "Молния", "Цепная молния", "Вскипание лавы" и заклинаниями категории "Шок" противникам, на которых наложен эффект "Ледяное клеймо", на 5%. "Ледяной шок" с вероятностью 50% может сковать противника льдом на 5 сек., если тот находится в 15 м от вас или дальше.',
			'Увеличивает урон, наносимый заклинаниями "Молния", "Цепная молния", "Вскипание лавы" и заклинаниями категории "Шок" противникам, на которых наложен эффект "Ледяное клеймо", на 10%. "Ледяной шок" с вероятностью 100% может сковать противника льдом на 5 сек., если тот находится в 15 м от вас или дальше.'
		],
		x: 0,
		y: 3
	},
	{
		i: 11770,
		n: 'Укрепляющее дуновение',
		m: 2,
		s: [16086,16544],
		d: [
			'После того как вы удачно прервете вражеское заклинание с помощью "Пронизывающего ветра", ваше сопротивление заклинаниям этой школы магии возрастает на ((<span class="w">floor</span>(<span class="w">cond</span>($lte(<span class="w">level</span>, 70), <span class="w"> level</span>, <span class="w"> cond</span>($lte(<span class="w">level</span>, 80), <span class="w"> level</span> + (<span class="w">level</span>) * 5, <span class="w"> level</span> + (<span class="w">level</span>) * 5 + (<span class="w">level</span>) * 7)) / 2))) на 10 сек.',
			'После того как вы удачно прервете вражеское заклинание с помощью "Пронизывающего ветра", ваше сопротивление заклинаниям этой школы магии возрастает на (<span class="w">cond</span>($lte(<span class="w">level</span>, 70), <span class="w"> level</span>, <span class="w"> cond</span>($lte(<span class="w">level</span>, 80), <span class="w"> level</span> + (<span class="w">level</span>) * 5, <span class="w"> level</span> + (<span class="w">level</span>) * 5 + (<span class="w">level</span>) * 7))) на 10 сек.'
		],
		x: 1,
		y: 3
	},
	{
		i: 2083,
		n: 'Жгучее пламя',
		m: 3,
		s: [77655,77656,77657],
		d: [
			'Опаляющие стрелы, вырывающиеся из вашего опаляющего тотема, с вероятностью 33% поджигают противника, нанося урон, равный непосредственному урону от выстрела, в течение 15 сек. Суммируется до 5 раз.',
			'Опаляющие стрелы, вырывающиеся из вашего опаляющего тотема, с вероятностью 67% поджигают противника, нанося урон, равный непосредственному урону от выстрела, в течение 15 сек. Суммируется до 5 раз.',
			'Опаляющие стрелы, вырывающиеся из вашего опаляющего тотема, с вероятностью 100% поджигают противника, нанося урон, равный непосредственному урону от выстрела, в течение 15 сек. Суммируется до 5 раз.'
		],
		x: 2,
		y: 3
	},
	{
		i: 2056,
		n: 'Сила земли',
		m: 2,
		s: [51523,51524],
		d: [
			'С вероятностью 50% с каждым тактом тотем оков земли может снять с заклинателя и его союзников все эффекты сковывания.',
			'С вероятностью 100% с каждым тактом тотем оков земли может снять с заклинателя и его союзников все эффекты сковывания.'
		],
		x: 0,
		y: 4
	},
	{
		i: 1693,
		n: 'Ярость шамана',
		m: 1,
		s: [30823],
		d: [
			'Весь получаемый урон уменьшается на 30%<!--sp63280:0--><!--sp63280-->. В течение 15 сек. на использование способностей, тотемов и атакующих заклинаний не потребуется затрат маны. Заклинание можно произнести, будучи оглушенным.'
		],
		t: ['Восстановление: 1 мин'],
		x: 1,
		y: 4
	},
	{
		i: 1689,
		n: 'Высвобожденная ярость',
		m: 2,
		s: [30802,30808],
		d: [
			'Повышает ваше мастерство на 4. Сила атаки всех членов группы или рейда в радиусе 100 м от шамана увеличивается на 5%.',
			'Повышает ваше мастерство на 8. Сила атаки всех членов группы или рейда в радиусе 100 м от шамана увеличивается на 10%.'
		],
		j: [
			{exp:4,mleatkpwr:[5/100,'percentOf','mleatkpwr'],rgdatkpwr:[5/100,'percentOf','rgdatkpwr']},
			{exp:8,mleatkpwr:[10/100,'percentOf','mleatkpwr'],rgdatkpwr:[10/100,'percentOf','rgdatkpwr']}
		],
		x: 3,
		y: 4
	},
	{
		i: 2057,
		n: 'Оружие Водоворота',
		m: 3,
		s: [51528,51529,51530],
		d: [
			'Когда шаман наносит урон в ближнем бою, с некоторой вероятностью время произнесения следующего заклинания "Молния", "Цепная молния", "Сглаз" или любого исцеляющего заклинания и затраты маны на него сокращаются на 20%. Эффект суммируется до 5 раз. Время действия – 30 сек.',
			'Когда шаман наносит урон в ближнем бою, с некоторой вероятностью (выше, чем для 1 - го уровня) время произнесения следующего заклинания "Молния", "Цепная молния", "Сглаз" или любого исцеляющего заклинания и затраты маны на него сокращаются на 20%. Эффект суммируется до 5 раз. Время действия – 30 сек.',
			'Когда шаман наносит урон в ближнем бою, с некоторой вероятностью (выше, чем для 2 - го уровня) время произнесения следующего заклинания "Молния", "Цепная молния", "Сглаз" или любого исцеляющего заклинания и затраты маны на него сокращаются на 20%. Эффект суммируется до 5 раз. Время действия – 30 сек.'
		],
		x: 1,
		y: 5
	},
	{
		i: 5563,
		n: 'Бурное вскипание лавы',
		m: 2,
		s: [77700,77701],
		d: [
			'Увеличивает урон от способности "Вскипание лавы" на 15% и еще на 10% за каждый эффект "Жгучее пламя", действующий на цель. Эффекты "Жгучее пламя" при этом поглощаются.',
			'Увеличивает урон от способности "Вскипание лавы" на 30% и еще на 20% за каждый эффект "Жгучее пламя", действующий на цель. Эффекты "Жгучее пламя" при этом поглощаются.'
		],
		x: 2,
		y: 5,
		r: [12,3]
	},
	{
		i: 2058,
		n: 'Дух дикого волка',
		m: 1,
		s: [51533],
		d: [
			'Призывает 2 духов волка под командование шамана. Время жизни – 30 сек.'
		],
		t: ['<table width="100%"><tr><td>12% от базовой Мана</td><th>Радиус действия: 30 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 2 мин</th></tr></table>'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Исцеление',
	color: '#4D80FF',
	role: 4,
	mastery: {
		description: 'Лекарь, который взывает к духам предков и очистительной силе воды, чтобы исцелить раны союзников.',
		spells: [
			{id:974,name:'Щит земли',icon:'spell_nature_skinofearth'},
			{id:16213,name:'Чистота',icon:'spell_frost_wizardmark'},
			{id:95862,name:'Медитация',icon:'spell_nature_sleep'}
		],
		rating: [
			{id:77226,name:'Глубокое исцеление',description:'<!--sp77226:0-->Повышает эффективность исцеляющих заклинаний максимум на 24%. Количество дополнительно восстанавливаемого здоровья зависит от состояния цели (тяжело раненные союзники получают более эффективное исцеление). Каждое очко искусности дополнительно усиливает эффект исцеления на 3.0%.<!--sp77226-->'}
		]
	},
	icon: 'spell_nature_magicimmunity',
	t: [
	{
		i: 5568,
		n: 'Решимость предков',
		m: 2,
		s: [77829,77830],
		d: [
			'Уменьшает урон, получаемый во время произнесения заклинаний, на 5%.',
			'Уменьшает урон, получаемый во время произнесения заклинаний, на 10%.'
		],
		x: 0,
		y: 0
	},
	{
		i: 593,
		n: 'Средоточие приливов',
		m: 3,
		s: [16179,16214,16215],
		d: [
			'Снижает затраты маны на все заклинания исцеления на 2%.',
			'Снижает затраты маны на все заклинания исцеления на 4%.',
			'Снижает затраты маны на все заклинания исцеления на 6%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 11177,
		n: 'Искра жизни',
		m: 3,
		s: [84846,84847,84848],
		d: [
			'Повышает эффективность ваших исцеляющих заклинаний на 2%, а эффективность получаемого вами исцеления – на 5%.',
			'Повышает эффективность ваших исцеляющих заклинаний на 4%, а эффективность получаемого вами исцеления – на 10%.',
			'Повышает эффективность ваших исцеляющих заклинаний на 6%, а эффективность получаемого вами исцеления – на 15%.'
		],
		j: [
			{_healpct:5,healpct:2},
			{_healpct:10,healpct:4},
			{_healpct:15,healpct:6}
		],
		x: 2,
		y: 0
	},
	{
		i: 583,
		n: 'Улучшенный водный щит',
		m: 2,
		s: [16180,16196],
		d: [
			'При критическом эффекте заклинаний "Волна исцеления", "Великая волна исцеления" или "Быстрина" с вероятностью 50% у вас восполнится столько маны, сколько восполняется при поглощении одной сферы "Водного щита". Тот же эффект возникает с вероятностью 30% при критическом эффекте заклинания "Исцеляющий всплеск" и с вероятностью 15% при критическом эффекте "Цепного исцеления".',
			'При критическом эффекте заклинаний "Волна исцеления", "Великая волна исцеления" или "Быстрина" с вероятностью 100% у вас восполнится столько маны, сколько восполняется при поглощении одной сферы "Водного щита". Тот же эффект возникает с вероятностью 60% при критическом эффекте заклинания "Исцеляющий всплеск" и с вероятностью 30% при критическом эффекте "Цепного исцеления".'
		],
		x: 0,
		y: 1
	},
	{
		i: 595,
		n: 'Тотемное средоточие',
		m: 2,
		s: [16173,16222],
		d: [
			'Снижает затраты маны на создание тотемов на 15% и увеличивает время их существования на 20%.',
			'Снижает затраты маны на создание тотемов 30% и увеличивает время их существования на 40%.'
		],
		x: 1,
		y: 1
	},
	{
		i: 5567,
		n: 'Внезапное озарение',
		m: 3,
		s: [77794,77795,77796],
		d: [
			'После произнесения любого заклинания категории "Шок" эффективность следующего исцеляющего заклинания повышается на 10%, а затраты маны на него снижаются на 25% от затрат на произнесенное заклинание категории "Шок".',
			'После произнесения любого заклинания категории "Шок" эффективность следующего исцеляющего заклинания повышается на 20%, а затраты маны на него снижаются на 50% от затрат на произнесенное заклинание категории "Шок".',
			'После произнесения любого заклинания категории "Шок" эффективность следующего исцеляющего заклинания повышается на 30%, а затраты маны на него снижаются на 75% от затрат на произнесенное заклинание категории "Шок".'
		],
		x: 2,
		y: 1
	},
	{
		i: 1699,
		n: 'Защитник природы',
		m: 3,
		s: [30881,30883,30884],
		d: [
			'Если в результате полученного удара уровень вашего здоровья падает ниже 30%, максимальный запас вашего здоровья возрастает на 5% на 10 сек., а уровень вашей угрозы относительно атакующего снижается. Время восстановления: 30 секунд.',
			'Если в результате полученного удара уровень вашего здоровья падает ниже 30%, максимальный запас вашего здоровья возрастает на 10% на 10 сек., а уровень вашей угрозы относительно атакующего снижается. Время восстановления: 30 секунд.',
			'Если в результате полученного удара уровень вашего здоровья падает ниже 30%, максимальный запас вашего здоровья возрастает на 15% на 10 сек., а уровень вашей угрозы относительно атакующего снижается. Время восстановления: 30 секунд.'
		],
		x: 3,
		y: 1
	},
	{
		i: 581,
		n: 'Защита предков',
		m: 2,
		s: [16176,16235],
		d: [
			'Уменьшает получаемый целью физический урон на 5% в течение 15 сек. после критического эффекта одного из ваших лечебных заклинаний, примененных к этой цели.',
			'Уменьшает получаемый целью физический урон на 10% в течение 15 сек. после критического эффекта одного из ваших лечебных заклинаний, примененных к этой цели.'
		],
		x: 0,
		y: 2
	},
	{
		i: 591,
		n: 'Природная стремительность',
		m: 1,
		s: [16188],
		d: [
			'При использовании следующее заклинание сил природы будет применено мгновенно, если базовое время его произнесения не превышает 10 сек.'
		],
		t: ['Восстановление: 2 мин'],
		x: 1,
		y: 2
	},
	{
		i: 1696,
		n: 'Благословение природы',
		m: 3,
		s: [30867,30868,30869],
		d: [
			'Повышает эффективность ваших исцеляющих заклинаний прямого действия, применяемых к целям, защищенным "Щитом земли", на 6%.',
			'Повышает эффективность ваших исцеляющих заклинаний прямого действия, применяемых к целям, защищенным "Щитом земли", на 12%.',
			'Повышает эффективность ваших исцеляющих заклинаний прямого действия, применяемых к целям, защищенным "Щитом земли", на 18%.'
		],
		x: 2,
		y: 2
	},
	{
		i: 588,
		n: 'Живая вода',
		m: 2,
		s: [16187,16205],
		d: [
			'Повышает эффективность тотема исцеляющего потока на 25%, а заклинания "Целительный ливень" – на 15%.',
			'Повышает эффективность тотема исцеляющего потока на 50%, а заклинания "Целительный ливень" – на 30%.'
		],
		x: 1,
		y: 3
	},
	{
		i: 2084,
		n: 'Улучшенное очищение духа',
		m: 1,
		s: [77130],
		d: [
			'"Очищение духа" позволяет также снять с союзника один магический эффект.'
		],
		x: 2,
		y: 3
	},
	{
		i: 11435,
		n: 'Очищающие воды',
		m: 2,
		s: [86959,86962],
		d: [
			'Затраты маны на заклинание "Очищение духа" сокращаются на 20%. Снимая отрицательный эффект, это заклинание также восстанавливает цели <!--pts1-->1317 to 1485<!----> ед. здоровья.',
			'Затраты маны на заклинание "Очищение духа" сокращаются на 40%. Снимая отрицательный эффект, это заклинание также восстанавливает цели <!--pts1-->2634 to 2970<!----> ед. здоровья.'
		],
		x: 3,
		y: 3,
		r: [11,1]
	},
	{
		i: 2061,
		n: 'Пробуждение предков',
		m: 3,
		s: [51556,51557,51558],
		d: [
			'При критическом эффекте любого направленного на одну цель исцеляющего заклинания прямого действия вы призываете дух предков, который мгновенно излечивает участника группы или рейда с наименьшим процентным показателем здоровья в радиусе 40 м на 10% от восстановленного вами здоровья.',
			'При критическом эффекте любого направленного на одну цель исцеляющего заклинания прямого действия вы призываете дух предков, который мгновенно излечивает участника группы или рейда с наименьшим процентным показателем здоровья в радиусе 40 м на 20% от восстановленного вами здоровья.',
			'При критическом эффекте любого направленного на одну цель исцеляющего заклинания прямого действия вы призываете дух предков, который мгновенно излечивает участника группы или рейда с наименьшим процентным показателем здоровья в радиусе 40 м на 30% от восстановленного вами здоровья.'
		],
		x: 0,
		y: 4,
		r: [7,2]
	},
	{
		i: 590,
		n: 'Тотем прилива маны',
		m: 1,
		s: [16190],
		d: [
			'Шаман создает рядом с собой тотем прилива маны с прочностью, равной 10% от своего запаса здоровья, и временем существования 12 сек. Дух всех участников группы или рейда в радиусе 40 м повышается на 400% от показателя духа шамана (кратковременные повышающие дух положительные эффекты при этом не учитываются).'
		],
		t: ['Восстановление: 3 мин','Инструменты:<br /><div class="indent q1"><a href="/items&amp;filter=cr=91;crs=5;crv=0">Тотем воды</a></div>'],
		x: 1,
		y: 4
	},
	{
		i: 7705,
		n: 'Теллурические токи',
		m: 2,
		s: [82984,82988],
		d: [
			'Вы настраиваетесь на восприятие энергетических потоков и восполняете ману при каждом произнесении заклинания "Молния" в количестве 20% от нанесенного им урона.',
			'Вы настраиваетесь на восприятие энергетических потоков и восполняете ману при каждом произнесении заклинания "Молния" в количестве 40% от нанесенного им урона.'
		],
		x: 2,
		y: 4
	},
	{
		i: 15487,
		n: 'Тотем духовной связи',
		m: 1,
		s: [98008],
		d: [
			'Создает рядом с заклинателем тотем духовной связи с прочностью 5 ед. и временем существования 6 сек., который снижает количество урона, получаемого участниками группы или рейда в радиусе 10 м на 10%. Раз в 1 сек. количество здоровья этих игроков перераспределяется между ними таким образом, чтобы все они имели одинаковый процент максимального запаса здоровья.'
		],
		t: ['11% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 3 мин</th></tr></table>','Инструменты:<br /><div class="indent q1"><a href="/items&amp;filter=cr=91;crs=3;crv=0">Air Totem</a></div>'],
		x: 3,
		y: 4
	},
	{
		i: 2063,
		n: 'Приливные волны',
		m: 3,
		s: [51562,51563,51564],
		d: [
			'После прочтения заклинаний "Цепное исцеление" или "Быстрина" время произнесения следующего заклинания "Волна исцеления" и "Великая волна исцеления" сокращается на 10%, а вероятность критического эффекта заклинания "Исцеляющий всплеск" повышается на 10%. 2 заряда:зарядов.',
			'После прочтения заклинаний "Цепное исцеление" или "Быстрина" время произнесения следующего заклинания "Волна исцеления" и "Великая волна исцеления" сокращается на 20%, а вероятность критического эффекта заклинания "Исцеляющий всплеск" повышается на 20%. 2 заряда:зарядов.',
			'После прочтения заклинаний "Цепное исцеление" или "Быстрина" время произнесения следующего заклинания "Волна исцеления" и "Великая волна исцеления" сокращается на 30%, а вероятность критического эффекта заклинания "Исцеляющий всплеск" повышается на 30%. 2 заряда:зарядов.'
		],
		x: 1,
		y: 5
	},
	{
		i: 2060,
		n: 'Благословение вечности',
		m: 2,
		s: [51554,51555],
		d: [
			'На 40% повышает вероятность наложить эффект периодического исцеления "Жизнь Земли" на союзников, чей запас здоровья не превышает 35%.',
			'На 80% повышает вероятность наложить эффект периодического исцеления "Жизнь Земли" на союзников, чей запас здоровья не превышает 35%.'
		],
		x: 2,
		y: 5
	},
	{
		i: 2064,
		n: 'Быстрина',
		m: 1,
		s: [61295],
		d: [
			'Восстанавливает союзнику <!--pts1-->2363<!----> ед. здоровья и дополнительно <!--pts2:3:5-->3725<!----> ед. в течение 15 сек. Следующее "Цепное исцеление", направленное на того же персонажа и произнесенное в течение 15 сек., снимает с него эффект периодического лечения, но восстанавливает на 25% больше здоровья.'
		],
		t: ['<table width="100%"><tr><td>10% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 6 сек.</th></tr></table><!--?61295:40:85:85:255:0:1000-->'],
		x: 1,
		y: 6
	}
	]
}
]);
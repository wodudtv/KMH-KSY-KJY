document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const characterNameInput = document.getElementById('character-name');
    const characterInfoContainer = document.getElementById('character-info');




    // 모든 리그 오브 레전드 캐릭터 정보를 하드 코딩
    const allCharacters = [
        {
            name: '가렌',
            level: '탑',
            class: '패시브 - 인내심 , Q - 결정타 , W - 용기 , E - 심판 , R - 데마시아의 정의',
            links: '내 검과 심장은 데마시아의 것이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Garen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '갈리오',
            level: '미드, 서폿',
            class: '패시브 - 석상의 강타 , Q - 전장의 돌풍 , W - 듀란드의 방패 , E - 정의의 주먹 , R - 영웅출현',
            links: '힘을 발휘할 시간이군!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Galio.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '갱플랭크',
            level: '탑',
            class: '패시브 - 불의 심판 , Q - 혀어어어업상 ,  W - 괴혈병 치료 ,  E - 화약통 ,  R - 포탄 세례',
            links: '지옥의 불길도, 죽음의 심연도, 이 몸을 넘볼 수는 없다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Gangplank.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '그라가스',
            level: '탑, 정글',
            class: '패시브 - 서비스 시간 ,  Q - 술통 굴리기 ,  W - 취중 분노 , E - 몸통 박치기 ,  R - 술통 폭발',
            links: '네가 사는 거라면 나도 끼지~',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Gragas.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '그레이브즈',
            level: '정글',
            class: '패시브 - 새로운 운명 , Q - 화약 역류 , W - 연막탄 , E - 빨리 뽑기 , R - 무고한 희생자',
            links: '내가 돌아왔다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Graves.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '그웬',
            level: '탑',
            class: '패시브 - 가위 난도질 , Q - 싹둑 싹둑! , W - 신성한 안개 , E - 돌격가위 ,  R - 바느질',
            links: '자신 있게! 어깨 펴고, 가위 들고!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Gwen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '나르',
            level: '탑',
            class: '패시브 - 분노 유전자 , Q - 부메랑 던지기 / 돌덩이 던지기 , W - 슝슝 / 쿵쾅 , E - 폴짝 / 우지끈 , R - 나르!',
            links: '나르! 갸다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Gnar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '나미',
            level: '서폿',
            class: '패시브 - 밀려오는 파도 , Q - 물의 감옥 ,  W - 밀물 썰물 , E - 파도 소환사의 축복 , R - 해일',
            links: '파도가 뭘 싣고 올진 나한테 달렸죠.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nami.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '나서스',
            level: '탑',
            class: '패시브 - 영혼의 포식자 , Q - 흡수의 일격 , W - 쇠약 , E - 영혼의 불길 ,  R - 사막의 분노',
            links: '삶과 죽음의 순환은 계속된다. 우리는 살 것이고, 저들은 죽을 것이다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nasus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '나피리',
            level: '미드',
            class: '패시브 - 늘어나는 무리 , Q - 다르킨 단검 , W - 사냥개의 추적 , E - 적출 , R - 무리의 부름',
            links: '추적, 시작이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Naafiri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '노틸러스',
            level: '서폿',
            class: '패시브 - 강력한 일격 , Q - 닻줄 견인 , W - 타이탄의 분노 , E - 역조 , R - 폭뢰',
            links: '물이 깊으니... 조심해...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nautilus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '녹턴',
            level: '정글',
            class: '패시브 - 그림자 칼날 , Q - 황혼의 인도자 , W - 어둠의 장막 , E - 말할 수 없는 공포 , R - 피해망상',
            links: '어둠을… 맞이하라…!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nocturne.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '누누와 윌럼프',
            level: '정글',
            class: '패시브 - 프렐요드의 부름 , Q - 잡아먹기 , W - 데굴데굴 눈덩이! , E - 눈덩이 팡팡팡 , R - 절대 영도',
            links: '모험은 역시 친구랑 같이 해야 신나는 법! (윌럼프 웃음)',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nunu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '니달리',
            level: '정글',
            class: '패시브 - 수풀 배회 , Q - 창 투척 / 숨통 끊기 , W - 매복 덫 / 급습 , E - 태고의 생명력 / 할퀴기 , R - 쿠거의 상',
            links: '야생이 부르면 내가 응답한다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nidalee.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '니코',
            level: '미드, 서폿',
            class: 'Q - 꽃망울 폭발 , W - 형상 분리 , E - 칭칭 올가미 , R - 만개',
            links: '니코? 정말 멋진 선택이야!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Neeko.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '닐라',
            level: '원딜',
            class: '패시브 - 영원한 기쁨 , Q - 무형의 검 , W - 승리의 장막 , E - 급류 , R - 환희',
            links: '기쁨이, 영원토록 함께하리라!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Nilah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '다리우스',
            level: '탑',
            class: '패시브 - 과다출혈 , Q - 학살 , W - 마비의 일격 , E - 포획 , R - 녹서스의 단두대',
            links: '오직 나만이 승리로 이끌 수 있다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Darius.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '다이애나',
            level: '정글, 미드',
            class: '패시브 - 서늘한 달빛 검 , Q - 초승달 검기 ,  W - 은빛 가호 , E - 월광 쇄도 , R - 달빛 낙하',
            links: '새로운 달이 떠오르고 있다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Diana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '드레이븐',
            level: '원딜',
            class: '패시브 - 드레이븐의 리그 , Q - 회전 도끼 , W - 광기의 피 , E - 비켜서라 , R - 죽음의 소용돌이',
            links: '드레이븐의 리그에 오신 걸 환영한다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Draven.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '라이즈',
            level: '미드',
            class: '패시브 - 비전 연마 , Q - 과부하 , W - 룬 감옥 , E - 주문 전이 , R - 공간 왜곡',
            links: '대재앙에 한발 앞서가는 거다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ryze.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '라칸',
            level: '서폿',
            class: '패시브 - 요술 망토 , Q - 빛나는 깃털 , W - 화려한 등장 , E - 전쟁무도 , R - 매혹의 질주',
            links: '한번 신나게 춰볼까!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Rakan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '람머스',
            level: '탑',
            class: '패시브 - 가시박힌 껍질 , Q - 대회전 , W - 몸 말아 웅크리기 , E - 광란의 도발 , R - 지진 폭격',
            links: '그래.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Rammus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '럭스',
            level: '서폿, 미드',
            class: '패시브 - 광채 , Q - 빛의 속박 , W - 프리즘 보호막 , E - 광휘의 특이점 , R - 최후의 섬광',
            links: '어디 한번 길을 밝혀보죠!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Lux.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '럼블',
            level: '탑, 미드',
            class: '패시브 - 고철장 거인 , Q - 화염방사기 , W - 고철 방패 , E - 전기 작살 , R - 이퀄라이저 미사일',
            links: '자, 한번 붙어 보자고!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Rumble.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '레나타 글라스크',
            level: '서폿',
            class: '패시브 - 영향력 , Q - 악수 , W - 긴급 구제 , E - 충성 고객 우대 , R - 적대적 인수',
            links: '살고 싶으면 글라스크 님이라고 불러라.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Renata.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '레넥톤',
            level: '탑',
            class: '패시브 - 분노의 지배 , Q - 양떼 도륙 , W - 무자비한 포식자 , E - 자르고 토막내기 , R - 강신',
            links: '내가 살아있는 한, 모두 죽는다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Renekton.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '레오나',
            level: '서폿',
            class: '패시브 - 햇빛 , Q - 여명의 방패 , W - 일식 , E - 천공의 검 , R - 흑점 폭발',
            links: '새벽이 밝았습니다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Leona.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '렉사이',
            level: '정글',
            class: '패시브 - 제르사이의 분노 , Q - 여왕의 진노 / 먹잇감 추적 , W - 매복 / 돌출 , E - 성난 이빨 / 땅꿀 파기 , R - 공허의 돌진',
            links: '...(울음소리)',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/RekSai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '렐',
            level: '서폿',
            class: '패시브 - 갑옷 파쇄 , Q - 파열의 일격 , W - 철마술: 붕괴 / 철마술: 탑승 , E - 전속력 , R - 자기 폭풍',
            links: '아무도 받아들이지 않겠어. 누구도 빠져나갈 수 없을 테니까.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Rell.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '렝가',
            level: '탑',
            class: '패시브 - 보이지 않는 포식자 , 전용 버프 - 뼈이빨 포식자 , Q - 포악함 , W - 전투의 포효 , E - 올가미 투척 , R - 사냥의 전율',
            links: '오늘 밤! 사냥을 나선다...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Rengar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '루시안',
            level: '원딜',
            class: '패시브 - 빛의 사수 , Q - 꿰뚫는 빛 , W - 타는 불길 , E - 끈질긴 추격 , R - 빛의 심판',
            links: '결국 모두 죽기 마련. 내가 좀 거들어주지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Lucian.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '룰루',
            level: '서폿',
            class: '패시브 - 요정 친구 픽스 , Q - 반짝반짝 창 , W - 변덕쟁이 , E - 도와줘, 픽스! , R - 급성장',
            links: '만나서 반갑습니다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Lulu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '르블랑',
            level: '미드',
            class: '패시브 - 거울 환영 , Q - 악의의 인장 , W - 왜곡 , E - 환영 사슬 , R - 모방',
            links: '검은 장미단은 다시 피어날 겁니다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Leblanc.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '리 신',
            level: '정글, 탑',
            class: '패시브 - 질풍격 , Q - 음파 / 공명의 일격 , W - 방호 / 강철의 의지 , E - 폭풍 / 무력화 , R - 용의 분노',
            links: '당신의 뜻대로, 싸우겠소.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/LeeSin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '리븐',
            level: '탑',
            class: '패시브 - 룬 검 , Q - 부러진 날개 , W - 기 폭발 , E - 용맹 , R - 추방자의 검',
            links: '부러진 건, 다시 붙이면 돼.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Riven.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '리산드라',
            level: '미드',
            class: '패시브 - 냉기의 지배 , Q - 얼음 파편 , W - 서릿발 , E - 얼음갈퀴 길 , R - 얼음 무덤',
            links: '이 세상을... 꽁꽁 얼려주지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Lissandra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '릴리아',
            level: '정글, 탑',
            class: '패시브 - 꿈나무 지팡이 , Q - 뾰로롱 강타 , W - 이익, 쿵! , E - 데굴데굴 씨앗 , R - 감미로운 자장가',
            links: '정말? 날? 꿈이 이루어졌어!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Lillia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '마스터 이',
            level: '정글, 탑',
            class: '패시브 - 2연속 공격 , Q - 일격 필살 , W - 명상 , E - 우주류 검술 , R - 최후의 전사',
            links: '나의 검은 당신의 것이오.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/MasterYi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '마오카이',
            level: '탑, 정글',
            class: '패시브 - 마법 흡수 , Q - 덤불 주먹 , W - 뒤틀린 전진 , E - 묘목 던지기 , R - 대자연의 마수',
            links: '군도의 빛을 되찾으리라!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Maokai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '말자하',
            level: '미드',
            class: '패시브 - 공허 태세 , Q - 공허의 부름 , W - 공허의 무리 , E - 재앙의 환상 , R - 황천의 손아귀',
            links: '종말이 기다린다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Malzahar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '말파이트',
            level: '탑, 미드',
            class: '패시브 - 화강암 방패 , Q - 지진의 파편 , W - 천둥소리 , E - 지면 강타 , R - 멈출 수 없는 힘',
            links: '바위처럼 단단하게!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Malphite.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '모데카이저',
            level: '탑',
            class: '패시브 - 암흑 탄생 , Q - 말살 , W - 불멸 , E - 죽음의 손아귀 , R - 죽음의 세계',
            links: '운명, 지배, 그리고 기만.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Mordekaiser.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '모르가나',
            level: '서폿',
            class: '패시브 - 영혼 흡수 , Q - 어둠의 속박 , W - 고통의 그림자 , E - 칠흑의 방패 , R - 영혼의 족쇄',
            links: '날개를 묶었다고 의지까지 꺾인 건 아니야.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Morgana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '문도 박사',
            level: '탑',
            class: '패시브 - 가고 싶은 데로 간다 , Q - 오염된 뼈톱 , W - 심장 전기 충격 , E - 둔기에 의한 외한 , R - 최대 투여량',
            links: '아~ 문도 박사... 납신다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/DrMundo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '미스 포츈',
            level: '원딜',
            class: '패시브 - 사랑의 한 방 , Q - 한 발에 두놈 , W - 활보 , E - 총알은 비를 타고 , R - 쌍권총 난사',
            links: '행운은 멍청이를 싫어하는 법이지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/MissFortune.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '밀리오',
            level: '서폿',
            class: '패시브 - 타오르는 힘 , Q - 초특급 불꽃 킥 , W - 아늑한 모닥불 , E - 따스한 포옹 , R - 생명의 온기',
            links: '내 옆에만 있어! 따뜻하게 해 줄게.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Milio.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '바드',
            level: '서폿',
            class: '패시브 - 방랑자의 부름 , Q - 우주의 결속 , W - 수호자의 성소 , E - 신비한 차원문 , R - 운명의 소용돌이',
            links: ' ♪ ♪♩ ♬',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Bard.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '바루스',
            level: '원딜',
            class: '패시브 - 죽지 않는 복수심 , Q - 꿰뚫는 화살 , W - 역병 화살 , E - 퍼붓는 화살 , R - 부패의 사슬',
            links: '죄 지은 자, 고통받을지어다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Varus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '바이',
            level: '정글',
            class: '패시브 - 폭발 보호막 , Q - 금고 부수기 , W - 찌그러뜨리기 , E - 끈질긴 힘 , R - 정지 명령',
            links: '일단 한 대 맞아. 질문은 나중에 하고.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Vi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '베이가',
            level: '미드',
            class: '패시브 - 극악무도 , Q - 사악한 일격 , W - 암흑 물질 , E - 사건의 지평선 , R - 태초의 폭발',
            links: '내가 너였다면, 너에게 어떤 자비도 없었을 거란 것만 알아둬!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Veigar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '베인',
            level: '원딜',
            class: '패시브 - 어둠 사냥꾼 , Q - 구르기 , W - 은화살 , E - 선고 , R - 결전의 시간',
            links: '어둠에 빠진 자들을 사냥해 볼까?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Vayne.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '벡스',
            level: '미드',
            class: '패시브 - 파멸과 우울 , Q - 안개 화살 , W - 거리 두기 , E - 커지는 어둠 , R - 그림자 파동',
            links: '뭐, 그러든가 말든가...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Vex.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '벨베스',
            level: '정글',
            class: '패시브 - 연보랏빛 죽음 , Q - 공허 쇄도 , W - 위와 아래 , E - 여제의 소용돌이 , R - 끝없는 연회',
            links: '내가 바로 적막의 목소리다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Belveth.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '벨코즈',
            level: '서폿, 미드',
            class: '패시브 - 유기물 분해 , Q - 플라즈마 분열 , W - 공허 균열 , E - 지각 붕괴 , R - 생물 분해 광선',
            links: '해체하여, 지식을 습득한다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Velkoz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '볼리베어',
            level: '탑, 정글',
            class: '패시브 - 무자비한 폭풍 , Q - 번개 강타 , W - 광란의 상처 , E - 천공 분열 , R - 폭풍을 부르는 자',
            links: '야생의 힘이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Volibear.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아리',
            level: '미드',
            class: '패시브 - 정기 흡수 , Q - 현혹의 구슬,W - 여우불 , E - 매혹 ,  R - 혼령 질주',
            links: '똑똑한 여우는 절대 잡히지 않거든',
            image: 'https://it.chosun.com/news/photo/202112/2021121601462_1.jpg' // 이미지 파일명 또는 URL
        },
        {
            name: '아무무',
            level: '정글',
            class: '패시브 - 저주의 손길 , Q - 붕대 던지기, W - 절망 , E - 짜증내기 ,  R - 슬픈미라의 저주',
            links: '날 선택해줄 줄은 정말 몰랐어..',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Amumu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아우렐리온솔',
            level: '미드',
            class: '패시브 - 우주의 창조자 , Q - 빛의 숨결 , W - 별의 비행 , E - 특이점 ,  R - 유성/ 천상 강림',
            links: '당연하지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/AurelionSol.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '브라움',
            level: '서폿',
            class: '패시브 -  뇌진탕 펀치 , Q - 동상 , W - 내가 지킨다 , E - 불굴 ,  R - 빙하 균열',
            links: '가장 듬직한 심장이 되어드리지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Braum.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294'
        },
        {
            name: '브라이어',
            level: '정글',
            class: '패시브 - 진홍빛 저주 , Q - 짜릿한 돌격 , W - 핏빛 광분 / 식욕폭발 , E - 오싹한 비명 ,  R - 불가항력적 죽음',
            links: '반가워, 난 배고파! 아니, 브라이어야',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Briar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '브랜드',
            level: '서폿',
            class: '패시브 - 불길 , Q - 불태우기 , W - 화염기둥 , E - 발화 ,  R - 파멸의 불덩이',
            links: '세상을 불태울 준비는 되었나? 흐하하하하!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Brand.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '블라디미르',
            level: '탑',
            class: '패시브 - 핏빛 계약 , Q - 수혈 , W - 피의 웅덩이 , E - 선혈의 파도 ,  R - 혈사병',
            links: '강이 핏빛으로 물들 것이다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Vladimir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '블리츠크랭크',
            level: '서폿',
            class: '패시브 - 마나 보호막 , Q - 로켓 손 , W - 폭주 , E - 강철 주먹 ,  R - 정전기장',
            links: '"시스템 가동. 준비 완료.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Blitzcrank.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '비에고',
            level: '정글',
            class: '패시브 - 군주의 지배 , Q - 몰락한 왕의 검 , W - 망령의 나락 , E - 안개의 길 ,  R - 심장 파괴자',
            links: '사랑 뒤엔 몰락뿐.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Viego.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '빅토르',
            level: '미드',
            class: '패시브 - 영광스러운 진화 , Q - 힘의 흡수 , W - 중력장  , E - 죽음의 광선 ,  R - 혼동의 폭풍',
            links: '영광스러운 진화에 동참하라.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Viktor.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '뽀삐',
            level: '탑,정글',
            class: '패시브 - 강철의 외교관 , Q - 망치 강타 , W - 굳건한 태세 , E - 용감한 돌진 ,  R - 수호자의 심판 ',
            links: '영웅이라뇨, 전 그저 망치를 든 요들일 뿐이에요.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Poppy.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '사미라',
            level: '원딜',
            class: '패시브 - 무모한 충동 , Q - 천부적 재능 , W - 원형 검무 , E - 거침없는 질주 ,  R - 지옥불 난사',
            links: '스타일을 찾는 거야? 여기 있잖아!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Samira.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '사이온',
            level: '탑',
            class: '패시브 - 영광스러운 죽음 , Q - 대량 학살 강타 , W - 영혼의 용광로 , E - 학살자의 포효 ,  R - 멈출 수 없는 맹공',
            links: '휴식은... 산 자를 위한... 것이다..!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sion.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '사일러스',
            level: '미드 정글',
            class: '패시브 - 페트리사이트 폭발 , Q - 사슬 후려치기 , W - 국왕시해자 , E - 도주 / 억압 ,  R - 강탈',
            links: '해방이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sylas.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '샤코',
            level: '정글',
            class: '패시브 - 암습 , Q - 속임수 , W - 깜짝 상자 , E - 양날 독 ,  R - 환각',
            links: '마술 하나 보여줄까!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Shaco.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '세나',
            level: '서폿',
            class: '패시브 - 면죄 , Q - 꿰뚫는 어둠 , W -  마지막 포옹 , E - 검은 안개의 저주 ,  R - 여명의 그림자',
            links: '검은 안개를 홀로 상대하지 마.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '세라핀',
            level: '서폿',
            class: '패시브 - 무대 장악 , Q - 고음 , W - 소리 장막 , E - 비트 발사 ,  R - 앙코르',
            links: '세상을 바꿔보는 거야!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Seraphine.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '세주아니',
            level: '정글,탑',
            class: '패시브 - 혹한의 분노 , Q - 혹한의 맹습 , W - 혹한의 서릿발 , E - 만년 서리 ,  R - 빙하 감옥',
            links: '네가 가진 힘, 믿을 건 오직 그뿐이야!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sejuani.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '세트',
            level: '탑',
            class: '패시브 - 투기장의 투지 , Q - 주먹다짐 , W - 강펀치 , E - 안면 강타 ,  R - 대미 장식',
            links: '난, 최강이다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sett.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '소나',
            level: '서폿',
            class: '패시브 -  파워 코드 , Q - 용맹의 찬가 , W - 인내의 아리아 , E - 기민함의 노래 ,  R - 크레센도',
            links: '오늘은 어떤 명작을 연주해볼까요?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sona.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '소라카',
            level: '서폿',
            class: '패시브 -  구원 , Q - 별부름 , W - 은하의 마력 , E - 별의 균형 ,  R - 기원',
            links: '내 숨이 붙어있는 한, 고통받게 두진 않아요.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Soraka.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '쉔',
            level: '탑',
            class: '패시브 - 기 보호막 , Q - 황혼 강습 , W - 의지의 결계 , E - 의지의 결계 ,  R - 단결된 의지',
            links: '훌륭한 판단의 표본이로군.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Shen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '쉬바나',
            level: '정글',
            class: '패시브 - 용족의 분노 , Q - 두 번 물어뜯기 , W - 연소 , E - 화염 숨결 ,  R - 용의 강림',
            links: '나는 곧 내 적수의 공포이니라.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Shyvana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '스웨인',
            level: '원딜',
            class: '패시브 - 굶주린 새떼 , Q - 죽음의 손길 , W - 제국의 눈 , E - 속박명령 ,  R -  악의 승천 / 악의 불길',
            links: '네가 못 보는 힘, 그것이 진짜 공포다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Swain.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '스카너',
            level: '정글',
            class: '패시브 - 수정 첨탑 , Q - 수정 베기 , W - 수정 외골격 , E - 균열 ,  R - 꿰뚫기',
            links: '내 꼬리에 걸리면 곱게 죽진 못하지!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Skarner.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '시비르',
            level: '원딜',
            class: '패시브 -  재빠른 발놀림 , Q - 부메랑 검 , W - 튕기는 부메랑 , E - 주문 방어막 ,  R - 사냥 개시',
            links: '내 건 내가 알아서 챙겨. 목숨이든, 돈이든.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Sivir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '신 짜오',
            level: '정글',
            class: '패시브 - 결심 , Q - 삼조격 , W - 풍전참뢰 , E - 무쌍돌격 ,  R - 현월수호',
            links: '전장으로!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/XinZhao.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '신드라',
            level: '미드',
            class: '패시브 - 초월  , Q - 어둠 구체 , W - 의지의 힘 , E - 적군 와해 ,  R -  풀려난 힘',
            links: '내 안에 무한한 힘이 넘친다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Syndra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '신지드',
            level: '탑,미드',
            class: '패시브 - 독성 급류 , Q - 맹독의 자취 , W - 초강력 접착제 , E - 던져넘기기 ,  R - 광기의 물약',
            links: '한잔 하겠나!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Singed.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '쓰레쉬',
            level: '서폿',
            class: '패시브 - 지옥살이 , Q - 사형 선고 / 죽음의 질주 , W - 어둠의 통로 , E - 사슬 채찍 ,  R - 영혼 감옥',
            links: '어떤 고통을 선사해 줄까?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Thresh.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아이번',
            level: '정글',
            class: '패시브 - 숲의 친구 , Q - 덩굴뿌리 , W - 수풀 가꾸기 , E - 보호의 씨앗 ,  R - 데이지!',
            links: '내가 좋아하는 색은 봄! 봄빛이지',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ivern.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아지르',
            level: '미드',
            class: '패시브 - 슈리마의 유산 , Q - 사막의 맹습 , W -  일어나라! , E - 신기루 ,  R - 황제의 진영',
            links: '슈리마여, 너의 황제가 돌아왔다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Azir.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아칼리',
            level: '탑,미드',
            class: '패시브 - 암살자의 표식 , Q - 오연투척검 , W - 황혼의 장막 , E - 표창곡예 ,  R - 무결처형',
            links: '경외하라, 나는 섬기는 이 없는 암살자다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Akali.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아크샨',
            level: '미드',
            class: '패시브 - 비열한 싸움 , Q - 복수의 부메랑 , W - 악당 처단 , E - 영웅의 비상 ,  R - 인과응보',
            links: '한 번에 한 놈씩, 세상을 바로잡아주지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Akshan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아트록스',
            level: '탑',
            class: '패시브 - 사신 태세 , Q - 다르킨의 검 , W - 지옥사슬 , E - 파멸의 돌진 ,  R - 세계의 종결자',
            links: '고요한 종말에 귀가 멀게 해 주마.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Aatrox.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '아펠리오스',
            level: '원딜',
            class: '패시브 - 암살자와 예언자 , Q - 달빛탄 , W - 위상 변화 , E -  ,  R - 월광포화',
            links: '아펠리오스, 가장 강력한 무기는 바로 네 신념이야.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Aphelios.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '알리스타',
            level: '서폿',
            class: '패시브 - 승리의 포효 , Q - 분쇄 , W - 박치기 , E - 짓밟기 ,  R - 꺾을 수 없는 의지',
            links: '누구도 날 막지 못해!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '애니',
            level: '미드',
            class: '패시브 - 방화광 , Q - 붕괴 , W - 소각 , E - 용암 방패 ,  R - 소환: 티버',
            links: '너도 같이 놀래? 재밌겠다!"',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Annie.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '애니비아',
            level: '미드,서풋',
            class: '패시브 - 환생 , Q - 냉기 폭발 , W - 결정화 , E - 동상 ,  R - 얼음 폭풍',
            links: '내 날개를 타고.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Anivia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '애쉬',
            level: '원딜',
            class: '패시브 - 서리 화살 , Q - 궁사의 집중 , W - 일제 사격 , E - 매 날리기 ,  R - 마법의 수정화살',
            links: '화살 한 발로 세상을 평정해 주지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '야스오',
            level: '팁,원딜,미드',
            class: '패시브 - 낭인의 길 , Q - 강철 폭풍 , W - 바람 장막 , E - 질풍검 ,  R - 최후의 숨결',
            links: '죽음은 바람과 같지. 늘 내 곁에 있으니',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Yasuo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '에코',
            level: '정글,미드',
            class: '패시브 - Z 드라이브 공진 , Q - 시간의 톱니바퀴 , W - 평행 시간 교차 , E - 시간 도약 ,  R - 시공간 붕괴',
            links: '시간이 얼마나 있는지는 상관 없어. 어떻게 쓰느냐가 중요하지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ekko.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '엘리스',
            level: '정글',
            class: '패시브 - 거미 여왕 , Q - 신경독 / 독이빨 , W - 위험한 새끼 거미 / 광란의 질주 , E - 고치 / 줄타기 ,  R - 거미 형태 / 인간 형태',
            links: '거미줄에선 거미만 안전하지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Elise.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '오공',
            level: '탑,정글',
            class: '패시브 - 바위 피부 , Q - 파쇄격 , W - 분신 전사 , E - 근두운 급습 ,  R - 회전격',
            links: '내가 최고가 되겠어!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/MonkeyKing.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '오른',
            level: '탑',
            class: '패시브 - 간이 대장간 , Q - 용암 균열 , W - 불꽃 풀무질 , E - 화염 돌진 ,  R -  대장장이 신의 부름',
            links: '알았네, 간다고 가.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ornn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '오리아나',
            level: '탑',
            class: '패시브 - 시계태엽 감기 , Q - 명령: 공격 , W - 명령: 불협화음 , E - 명령: 보호 ,  R -  명령: 충격파',
            links: '당신의 적을 죽이겠어요. 재미있겠네요.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Orianna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '올라프',
            level: '팁,정글',
            class: '패시브 - 광전사의 분노 , Q - 역류 , W - 버티기 , E - 무모한 강타 ,  R - 라그나로크',
            links: '아무것도 남기지 않겠다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Olaf.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '요네',
            level: '탑,미드',
            class: '패시브 - 사냥꾼의 길 , Q - 필멸의 검 , W - 영혼 가르기 , E -  영혼해방 ,  R - 운명봉인',
            links: '하나로 베고, 다른 하나로 봉인하리.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Yone.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '요릭',
            level: '탑',
            class: '패시브 - 영혼의 길잡이 , Q - 최후의 의식 / 각성 , W - 망자의 진 , E - 애도의 안개 ,  R - 군도의 장송곡',
            links: '두려워 마라. 네 시체는, 잘 써 주마.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Yorick.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '우디르',
            level: '탑,정글',
            class: '패시브 - 가교 , Q - 야생 발톱 , W - 강철 갑옷 , E - 불길 쇄도 ,  R - 날개 돋친 폭풍',
            links: '갈등은 프렐요드의 원동력이지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Udyr.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '우르곳',
            level: '정글,탑',
            class: '패시브 -  화염의 메아리 , Q - 부식성 폭약 , W - 심판의 원 , E - 경멸 ,  R - 불사의 공포',
            links: '부러져 봐야... 얼마나 강한지 알 수 있지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Urgot.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '워윅',
            level: '탑,정글',
            class: '패시브 - 끝없는 허기 , Q - 야수의 송곳니 , W - 피의 사냥 , E - 원시의 포효 ,  R - 무한의 구속',
            links: '피비린내다! 도망쳐라...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Warwick.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '유미',
            level: '서폿',
            class: '패시브 - 야옹이 친구 , Q - 사르르탄 , W - 너랑 유미랑! / 계획 변경 , E - 슈우우웅 ,  R - 대단원',
            links: '너랑 유미랑! 우리 함께 잘해보자고!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Yuumi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '이렐리아',
            level: '탑,미드',
            class: '패시브 - 아이오니아의 열정 , Q - 칼날 쇄도 , W - 저항의 춤 , E - 쌍검협무 ,  R - 선봉진격검',
            links: '최초의 땅, 아이오니아를 위하여!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Irelia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '이블린',
            level: '정글',
            class: '패시브 - 악의 장막 , Q - 증오의 가시 , W - 황홀한 저주 , E - 채찍유린 / 채찍유린 강화 ,  R - 최후의 포옹',
            links: '날 원하잖아, 그렇지?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Evelynn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1698056386294' // 이미지 파일명 또는 URL
        },
        {
            name: '이즈리얼',
            level: '원딜',
            class: '패시브 - 끓어오르는 주문의 힘 , Q - 신비한 화살 , W - 정수의 흐름 , E - 비전 이동 , R - 정조준 일격',
            links: '임무를 수락하지! 잠깐, 어디 가는 거라고?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '일라오이',
            level: '탑',
            class: '패시브 - 고대신의 예언자 , Q - 촉수 강타 , W - 혹독한 가르침 , E - 영혼의 시험 , R - 믿음의 도약',
            links: '설교는 필요 없다. 부러진 뼈가 더 큰 교훈을 새겨 줄 테니.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Illaoi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '자르반',
            level: '정글',
            class: '패시브 - 전장의 군가 , Q - 용의 일격 , W - 황금빛 방패 , E - 데마시아의 깃발 , R - 대격변',
            links: '내 의지로, 여기서 끝을 보겠노라!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/JarvanIV.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '자야',
            level: '원딜',
            class: '패시브 - 관통상 , Q - 깃털 연타 , W - 죽음의 깃 , E - 깃부르미 , R - 저항의 비상',
            links: '댄스 파티에 내가 빠질 수는 없지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Xayah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '자이라',
            level: '서폿',
            class: '패시브 - 가시 정원 , Q - 치명적인 가시 , W - 맹렬한 성장 , E - 휘감는 뿌리 , R - 올가미 덩굴',
            links: '가시덤불에 포근히 안겨 봐.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zyra.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '자크',
            level: '정글, 서폿',
            class: '패시브 - 세포 분열 , Q - 탄성 주먹 , W - 불안정 물질 , E - 새총 발사 , R - 바운스!',
            links: '딱 봐도 잘 싸우게 생기지 않았어?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zac.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '잔나',
            level: '서폿' ,
            class: '패시브 - 순풍 , Q - 울부짖는 돌풍 , W - 서풍 , E - 폭풍의 눈 , R - 계절풍',
            links: '바람의 힘을 마음껏 부리세요!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Janna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '잭스',
            level: '탑, 정글',
            class: '패시브 - 가차없는 맹공 , Q - 도약 공격 , W - 무기 강화 , E - 반격 , R - 무기의 달인',
            links: '자, 한번 해 보자고!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '제드',
            level: '미드, 정글',
            class: '패시브 - 약자 멸시 , Q - 예리한 표창 , W - 살아있는 그림자 , E - 그림자 베기 , R - 죽음의 표식',
            links: '보이지 않는 검이 가장 무서운 법.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zed.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '제라스',
            level: '미드, 서폿',
            class: '패시브 - 마나 쇄도 , Q - 비전 파동 , W - 파멸의 눈 , E - 충격 구체 , R - 비전 의식',
            links: '난... 해방될 것이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Xerath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL 10
        },
        {
            name: '제리',
            level: '원딜',
            class: '패시브 - 살아있는 배터리 , Q - 집중 사격 , W - 초강력 레이저 , E - 스파크 돌진 , R - 번개 방출',
            links: '짜릿함 하나면 충분해.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zeri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '제이스',
            level: '탑, 미드',
            class: '패시브 - 마법공학 축전기 , Q - 하늘로! / 전격 폭발 , W - 전류 역장 / 초전하 , E - 천둥 강타 / 가속 관문 , R - 변환 : 머큐리 캐논 / 변환 : 머큐리 해머',
            links: '나는 더 나은 미래를 위해 싸운다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Jayce.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '조이',
            level: '미드, 서폿',
            class: '패시브 - 반짝반짝! , Q - 통통별 , W - 주문도둑 , E - 헤롱헤롱쿨쿨방울 , R - 차원넘기',
            links: '야호! 재밌겠다. 그치?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zoe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '직스',
            level: '원딜, 미드, 서폿',
            class: '패시브 - 짧은 도화선 , Q - 반동 폭탄 , W - 휴대용 폭약 , E - 마법공학 지뢰밭 , R - 지옥 화염 폭탄',
            links: '뻥~이요!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Ziggs.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '진',
            level: '원딜',
            class: '패시브 - 속삭임 , Q - 춤추는 유탄 , W - 살상연희 , E - 강제 관람 , R - 커튼 콜',
            links: '학살의 현장에서 난, 피어오른다. 붉은 여명에 피어나는... 꽃처럼.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Jhin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '질리언',
            level: '서폿, 미드',
            class: '패시브 - 시간의 유리병 , Q - 시한 폭탄 , W - 되감기 , E - 시간 왜곡 , R - 시간 역행',
            links: '그리할 줄 알고 있었소.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Zilean.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '징크스',
            level: '원딜',
            class: '패시브 - 신난다! , Q - 휘릭휘릭! , W - 빠직! , E - 와작와작 뻥! , R - 초강력 초토화 로켓!',
            links: '하핫! 신나게 놀아볼까?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Jinx.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '초가스',
            level: '탑',
            class: '패시브 - 육식, Q - 파열 , W - 흉포한 울부짖음 , E - 날카로운 가시 , R - 포식',
            links: '세계의 종말을 원한다고...? 좋아...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Chogath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카르마',
            level: '서폿',
            class: '패시브 - 열정 응집 , Q - 내면의 열정 / 영혼의 불꽃 , W - 굳은 결의 / 재생 , E - 고무 / 저항 , R - 만트라',
            links: '항상 정신을 집중하세요.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Karma.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446g' // 이미지 파일명 또는 URL
        },
        {
            name: '카밀',
            level: '탑',
            class: '패시브 - 적응형 방어체계 , Q - 정확성 프로토콜 , W - 전술적 휩쓸기 , E - 갈고리 발사 / 갈고리 돌진 , R - 마법공학 최후통첩',
            links: '정교함이 없다면 망나니일 뿐.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Camille.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL 20
        },
        {
            name: '카사딘',
            level: '미드',
            class: '패시브 - 공허석 , Q - 무의 구체 , W - 황천의 검 , E - 힘의 파동 , R - 균열 이동',
            links: '힘의 균형은 유지되어야 한다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kassadin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카서스',
            level: '정글',
            class: '패시브 - 죽음 극복 , Q - 황폐화 , W - 고통의 벽 , E - 부패 , R - 진혼곡',
            links: '고통, 희열, 그리고 평화… 죽음은 언제나 아름답다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Karthus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카시오페아',
            level: '미드, 탑 원딜',
            class: '패시브 - 독사의 품격 , Q - 맹독 폭발 , W - 독기의 늪 , E - 쌍독니 , R - 석화의 응시',
            links: '날 막을 해독제는 없을걸?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Cassiopeia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카이사',
            level: '원딜, 미드',
            class: '패시브 - 두 번째 피부 , Q - 이케시아 폭우 , W - 공허추적자 , E - 고속 충전 , R - 사냥본능',
            links: '사냥꾼이냐? 사냥감이냐?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kaisa.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카직스',
            level: '정글',
            class: '패시브 - 보이지 않는 위협 , Q - 공포 감지 , W - 공허의 가시 , E - 도약 , R - 공허의 습격',
            links: '변화란 좋은 거야.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Khazix.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '카타리나',
            level: '미드',
            class: '패시브 - 탐욕 , Q - 단검 투척 , W - 준비 , E - 순보 , R - 죽음의 연꽃',
            links: '폭력은 모든 것을 해결해 주지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Katarina.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '칼리스타',
            level: '원딜, 탑',
            class: '패시브 - 전투 테세(전용 아이템 : 칠흑의 창) , Q - 꿰뚫는 창 , W - 감시하는 혼 , E - 뽑아 찢기 , R - 운명의 부름',
            links: '배신자에겐, 죽음뿐.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kalista.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '케넨',
            level: '탑, 서폿',
            class: '패시브 - 폭풍의 표식 , Q - 천둥의 표창 , W - 전류 방출 , E - 번개 질주 , R - 날카로운 소용돌이',
            links: '눈은 절대 거짓말을 하지 않지.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kennen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '케이틀린',
            level: '원딜',
            class: '패시브 - 헤드샷 , Q - 필트오버 피스메이커 , W - 요들잡이 덫 , E - 90구경 투망 , R - 비장의 한 발',
            links: '이 사건은 내가 맡죠.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Caitlyn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '케인',
            level: '정글',
            class: '패시브 - 다르킨의 낫 , Q - 살상돌격 , W - 몰아치는 낫 , E - 그림자의 길 , R - 그림자의 지배',
            links: '네 능력을 입증해 볼 테냐?, 내가 왜?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kayn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL 30
        },
        {
            name: '케일',
            level: '탑',
            class: '패시브 - 거룩한 승천 , Q - 광휘의 일격 , W - 천상의 축복 , E - 화염주문검 , R - 신성한 심판',
            links: '모두가 내 전능함을 경외하리라.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kayle.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '코그모',
            level: '원딜',
            class: '패시브 - 이케시아식 마무리 , Q - 부식성 침 , W - 생체마법 폭격 , E - 공허의 분비물 , R - 살아있는 곡사포',
            links: '만찬의 시간이다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/KogMaw.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '코르키',
            level: '미드, 원딜',
            class: '패시브 - 마법공학 탄약 , Q - 인광탄 , W - 발키리 / 특급 폭탄 배송 , E - 개틀링 건 , R - 미사일 폭격',
            links: '상황 파악 끝! 최고의 전투기까지 있다고!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Corki.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '퀸',
            level: '탑, 원딜',
            class: '패시브 - 매사냥 , Q - 실명 공격 , W - 예리한 감각 , E - 공중제비 , R - 후방 지원 / 공중 강습',
            links: '정의의 날개로.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Quinn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '크산테',
            level: '탑',
            class: '패시브 - 불굴의 본능 , Q - 엔토포 타격 , W - 길을 여는 자 , E - 발놀림 , R - 총공세',
            links: '두려움 속에 사느니, 맞서 싸우는 걸 택하리라!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/KSante.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '클레드',
            level: '탑',
            class: '패시브 - 겁쟁이 도마뱀 스칼 , Q - 덫날리기 / 빵야! , W - 버럭버럭 , E - 이랴! , R - 돌겨어어억!!!',
            links: '용기? 그런 게 왜 필요해? 광기! 그래, 그게 진짜지!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kled.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '키아나',
            level: '미드',
            class: '패시브 - 왕가의 특권 , Q - 원소의 분노 / 이쉬탈의 칼날 , W - 대지창조 , E - 대담무쌍 , R - 여왕의 진가',
            links: '너도 내 진가를 알게 되겠군!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Qiyana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '킨드레드',
            level: '정글',
            class: '패시브 - 킨드레드의 표식 , Q - 화살 세례 , W - 늑대의 광기 , E - 차오르는 공포 , R - 양의 안식처',
            links: '함께가 아니면., 아무것도 아니다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Kindred.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '타릭',
            level: '서폿, 탑',
            class: '패시브 - 담대함 , Q - 별빛 손길 , W - 수호의 고리 , E - 황홀한 강타 , R - 우주의 광휘',
            links: '희망의 빛이 보이십니까? 그게 바로 접니다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Taric.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '탈론',
            level: '미드, 정글',
            class: '패시브 - 검의 최후 , Q - 녹서스식 외교 , W - 갈퀴손 , E - 암살자의 길 , R - 그림자 공격',
            links: '칼에 살고, 칼에 죽는다.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Talon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '탈리야',
            level: '정글',
            class: '패시브 - 바위타기 , Q - 파편 난사 , W - 지각변동 , E - 대지의 파동 , R - 바위술사의 벽',
            links: '마법의 베틀로, 바위를 엮어내리라.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Taliyah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '탐켄치',
            level: '탑, 서폿',
            class: '패시브 - 절대 미각 , Q - 혀 채찍 , W - 심연 잠수 , E - 두꺼운 피부 , R - 집어삼키기',
            links: '왕이든 폭군이든 마음대로 불러라. 강물은, 망자의 이름까지 기억해주진 않으니까.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/TahmKench.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '트런들',
            level: '탑, 정글',
            class: '패시브 - 헌납 , Q - 깨물기 , W - 얼음 왕국 , E - 얼음 기둥 , R - 진압',
            links: '트롤 한 판 해볼까?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Trundle.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '트리스타나',
            level: '원딜, 미드',
            class: '패시브 - 정조준 , Q - 속사 , W - 로켓 점프 , E - 폭발 화약 , R - 대구경 탄환',
            links: '일단 한 번 쏘고 나면 또 쏘고 싶을 거예요!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Tristana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '트린다미어',
            level: '탑',
            class: '패시브 - 격노 , Q - 피의 갈망 , W - 조롱의 외침 , E - 회전 베기 , R - 불사의 분노',
            links: '손쉬운 사냥이 되겠군!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Tryndamere.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '트위스티드 페이트',
            level: '미드',
            class: '패시브 - 사기 주사위 , Q - 와일드 카드 , W - 카드 뽑기 , E - 속임수 덱 , R - 운명 / 관문',
            links: '행운의 여신이, 내게 미소를 짓는군.',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/TwistedFate.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '트위치',
            level: '원딜',
            class: '패시브 - 맹독 , Q - 매복 , W - 독약 병 , E - 오염 , R - 무차별 난사',
            links: '죽거나 죽이거나. 약육강식은 그런 거지!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Twitch.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '티모',
            level: '탑, 서폿',
            class: '패시브 - 유격 전투 , Q - 실명 다트 , W - 신속한 이동 , E - 맹독 다트 , R - 유독성 함정',
            links: '티모 대위, 명을 받들겠습니다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Teemo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '파이크',
            level: '서폿, 미드',
            class: '패시브 - 가라앉은 자들의 축복 , Q - 뼈 작살 , W - 유령 잠수 , E - 망자의 물살 , R - 깊은 바다의 처형',
            links: '모두 빠뜨려주마...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Pyke.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '판테온',
            level: '미드, 서폿',
            class: '패시브 - 필멸자의 의지 , Q - 혜성의 창 , W - 방호의 도약 , E - 방패 돌격 , R - 거대 유성',
            links: '전쟁에서 우린, 다시 태어난다!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Pantheon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '피들스틱',
            level: '정글',
            class: '패시브 - 무해한 허수아비 (전용 아이템 : 허수아비) , Q - 공포 , W - 풍작 , E - 수확 , R - 까마귀 폭풍',
            links: '공포...',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Fiddlesticks.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '피오라',
            level: '탑',
            class: '패시브 - 치명적인 검무 , Q - 찌르기 , W - 응수 , E - 대가의 검술 , R - 대결투',
            links: '겨뤄볼 만한 상대… 어디 없나?',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Fiora.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '피즈',
            level: '미드',
            class: '패시브 - 영리한 싸움꾼 , Q - 성게 찌르기 , W - 심해석 삼지창 , E - 장난치기 / 재간둥이 , R - 미끼 뿌리기',
            links: '내가 혼내줄게!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Fizz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '하이머딩거',
            level: '탑, 미드, 원딜, 서폿',
            class: '패시브 - 마법공학 전문가 , Q - H-28G 진화형 포탑 , W - 마법공학 초소형 로켓 , E - CH-2 전자폭풍 수류탄 , R - 업그레이드!!!',
            links: '정말 현명한 선택이에요!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Heimerdinger.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
        {
            name: '헤카림',
            level: '정글',
            class: '패시브 - 출전 , Q -  회오리 베기 , W - 공포의 망령 , E - 파멸의 돌격 , R - 그림자의 맹습',
            links: '그림자 군도의 위력을 똑똑히 봐라!',
            image: 'https://opgg-static.akamaized.net/meta/images/lol/champion/Hecarim.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1696570752446' // 이미지 파일명 또는 URL
        },
       
   
   
        // 다른 캐릭터 정보를 여기에 추가
    ];




    // 검색 버튼 및 캐릭터 이름 입력란에 이벤트 리스너 추가
    searchButton.addEventListener('click', handleSearch);
    characterNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // 캐릭터 검색 및 목록 표시하는 함수
    function handleSearch() {
        const characterName = characterNameInput.value;
        const filteredCharacters = filterCharacters(characterName);
        if (filteredCharacters.length > 0) {
            displayCharacterList(filteredCharacters);
        } else {
            characterInfoContainer.innerHTML = '<p>캐릭터를 찾을 수 없습니다.</p>';
        }
    }

    // 이름으로 캐릭터 필터링하는 함수
    function filterCharacters(name) {
        return allCharacters.filter(char => char.name.includes(name));
    }

    // 캐릭터 목록 표시하는 함수
    function displayCharacterList(characters) {
        characterInfoContainer.innerHTML = '';
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.innerHTML = `
                <h2>${character.name}</h2>
                <p>추천 라인: ${character.level}</p>
                <p>스킬="${character.class}"</p>
                <img src="${character.image}" alt="${character.name}" width="200">
            `;
            characterInfoContainer.appendChild(characterDiv);
        });
    }

   

   

    //--------------------------------------------------------
    // 캐릭터 목록을 표시하는 함수를 업데이트
function displayCharacterList(characters) {
    characterInfoContainer.innerHTML = '';
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p>추천 라인: ${character.level}</p>
            <p class="character-class" data-tooltip="${character.class}">스킬: ${character.class}</p>
            <img src="${character.image}" alt="${character.name}" width="200">
        `;

        // 툴팁을 만들어 추가
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = character.links;
        characterDiv.appendChild(tooltip);

        // 마우스 이벤트 처리
        characterDiv.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });
        characterDiv.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        characterInfoContainer.appendChild(characterDiv);
    });
}

// CSS 스타일 추가 (툴팁을 숨기는 스타일)
const style = document.createElement('style');
style.innerHTML = `
    .tooltip {
        display: none;
        position: top;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 5px;
        border-radius: 4px;
        top: 100%;
        left: 0;
    }
`;

document.head.appendChild(style);

});

// 새로고침 버튼 요소 가져오기
const refreshButton = document.getElementById('champions-button');

// 새로고침 버튼에 클릭 이벤트 리스너 추가
refreshButton.addEventListener('click', function() {
    location.reload(); // 현재 페이지를 다시로드하여 새로고침
});
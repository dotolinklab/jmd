// 증명서 데이터
const certificateData = {
    resident: [
        {
            title: '주민등록등본(초본)',
            description: '본인의 주민등록 정보와 주소 변동 이력을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01004&CappBizCD=13100000015'
        },
        {
            title: '가족관계증명서(국문)',
            description: '가족 구성원 및 가족관계를 국문으로 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=02'
        },
        {
            title: '가족관계증명서(영문)',
            description: '가족 구성원 및 가족관계를 영문으로 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtEngFrrpApplrInfoInqW.do?menuFg=08'
        },
        {
            title: '기본증명서',
            description: '본인의 신상 정보(이름, 출생 등) 등 기본 사항을 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=03'
        },
        {
            title: '혼인관계증명서',
            description: '부부관계 및 혼인 여부 등을 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=04'
        },
        {
            title: '입양관계증명서',
            description: '입양 사실 및 입양 관계를 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=05'
        },
        {
            title: '친양자입양관계증명서',
            description: '친양자 입양 관계와 그 사실을 증명하는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=06'
        },
        {
            title: '제적등본',
            description: '과거 가족관계등록부가 말소된 기록 등 제적에 관한 사항을 확인할 수 있는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=10'
        },
        {
            title: '제적초본',
            description: '제적된 가족관계등록부 일부 내용을 확인할 수 있는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=11'
        },
        {
            title: '이미지 제적부',
            description: '말소된 가족관계등록부의 원본 이미지를 열람할 수 있는 서류입니다.',
            url: 'https://efamily.scourt.go.kr/pt/PtImgJjkpApplrInfoInqW.do?menuFg=13'
        }
    ],
    property: [
        {
            title: '부동산 등기사항증명서(등기부등본)',
            description: '부동산의 소유권, 권리관계 등을 공식적으로 확인할 수 있는 서류입니다.',
            url: 'https://www.iros.go.kr/index.jsp'
        },
        {
            title: '토지(임야) 대장',
            description: '토지(임야)의 소유, 지목, 면적 등을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr//mw/AA020InfoCappView.do?CappBizCD=13100000026&HighCtgCD=A02001001&tp_seq=01&Mcode=10207'
        },
        {
            title: '지적도(임야도)',
            description: '토지의 경계, 지번, 도형 등 지적 정보를 시각적으로 확인할 수 있는 도면입니다.',
            url: 'https://www.gov.kr//mw/AA020InfoCappView.do?CappBizCD=13100000027&HighCtgCD=-&FAX_TYPE=B&tp_seq=01&Mcode=10208'
        },
        {
            title: '토지이용계획확인원',
            description: '토지의 용도지역·지구, 행위제한 등 각종 계획 및 규제사항을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09005&CappBizCD=15000000013'
        },
        {
            title: '개별공시지가 확인서',
            description: '토지의 개별공시지가와 산정 내역 등을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000012'
        },
        {
            title: '개별주택가격 확인서',
            description: '개별주택의 공시가격과 이를 산정하는 근거를 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A02001&CappBizCD=15000000681&tp_seq=01'
        },
        {
            title: '공동주택가격 확인서',
            description: '아파트, 연립주택 등 공동주택의 공시가격과 산정 근거를 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A02001&CappBizCD=15000000682&tp_seq=01'
        }
    ],
    employment: [
        {
            title: '교원 등 재직증명서',
            description: '교원(교사 등) 및 관련 종사자의 재직 사실을 공식적으로 증명하는 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/134200000063',
            icon: 'fas fa-user-tie'
        },
        {
            title: '보육교직원 경력(재직) 증명서',
            description: '보육교직원의 경력과 재직 사실을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A05007&CappBizCD=10601000016&tp_seq=01',
            icon: 'fas fa-chalkboard-teacher'
        },
        {
            title: '국민연금 가입자 가입증명서(국문)',
            description: '국민연금 가입 상태를 국문으로 증명해주는 공식 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/B55201500022',
            icon: 'fas fa-file-alt'
        },
        {
            title: '국민연금 가입자 가입증명서(영문)',
            description: '국민연금 가입 사실을 영문으로 증명하는 공식 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/B55201500025',
            icon: 'fas fa-file-alt'
        },
        {
            title: '4대사회보험 가입자 가입내역 확인서(개인)',
            description: '국민연금, 건강보험, 고용보험, 산재보험 등 4대 사회보험 가입 현황을 한눈에 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/B55201500032',
            icon: 'fas fa-shield-alt'
        },
        {
            title: '건강보험 자격득실 확인서',
            description: '건강보험 자격 취득과 상실 이력을 공식적으로 확인하는 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000050333',
            icon: 'fas fa-heartbeat'
        },
        {
            title: '건강보험료 납부확인서',
            description: '납부한 건강보험료 내역을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A06001&CappBizCD=SG4CADM2017&tp_seq=01',
            icon: 'fas fa-receipt'
        },
        {
            title: '(근로복지공단)고용보험 자격이력내역서',
            description: '고용보험의 가입 이력과 자격 변동 내용을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/portal/service/serviceInfo/B49000100050',
            icon: 'fas fa-briefcase'
        }
    ],
    income: [
        {
            title: '소득금액 증명',
            description: '개인의 소득금액을 공식적으로 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=12100000021'
        },
        {
            title: '납세증명서(국세완납증명)',
            description: '국세를 정상적으로 납부하고 있음을 증명하는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000011&tp_seq=01'
        },
        {
            title: '지방세 납세증명',
            description: '지방세를 납부했음을 증명하는 공문서입니다.',
            url: 'https://www.gov.kr//mw/AA020InfoCappView.do?CappBizCD=13100000056&HighCtgCD=A03019002&FAX_TYPE=y&img=02&tp_seq=01&Mcode=10209/'
        },
        {
            title: '지방세 세목별 과세증명서',
            description: '지방세 각 세목별 과세 내역을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000084'
        },
        {
            title: '소득확인증명서(개인종합자산관리계좌 가입용)',
            description: 'ISA(개인종합자산관리계좌) 가입 시 필요한 소득 확인 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000353&tp_seq=01'
        },
        {
            title: '소득확인증명서(청년우대형주택청약종합저축 가입 및 과세특례 신청용)',
            description: '청년우대형주택청약종합저축 가입 및 세제 혜택 신청에 필요한 소득 확인 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000364&tp_seq=01'
        },
        {
            title: '소득확인증명서(청년희망적금 가입 및 과세특례 신청용)',
            description: '청년희망적금 가입과 과세특례 신청을 위한 소득 확인 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000372&tp_seq='
        },
        {
            title: '납부내역증명(납세사실증명)',
            description: '국세 납부 내역을 증명하거나 납세 사실이 있음을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000018&tp_seq=01'
        },
        {
            title: '모범납세자증명서',
            description: '모범납세자로 선정된 사실을 증명하는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000347&tp_seq=01'
        },
        {
            title: '근로(자녀)장려금 수급사실증명',
            description: '근로·자녀장려금의 수급 사실을 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000354&tp_seq=01'
        },
        {
            title: '연금보험료 등 소득·세액공제확인서',
            description: '연금보험료 등 각종 세액공제 내역을 확인하고 증명하는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000330&tp_seq=01'
        },
        {
            title: '사실증명(신고사실 없음)',
            description: '세무 신고 이력이 없음을 공식적으로 증명하는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000352&tp_seq=01'
        }
    ],
    vehicle: [
        {
            title: '운전경력증명서(국문,영문)',
            description: '운전면허 취득일부터의 운전 이력 및 면허정보를 확인할 수 있는 서류입니다.',
            url: 'https://www.gov.kr//mw/AA020InfoCappView.do?HighCtgCD=A08004&CappBizCD=13200000049&tp_seq=01'
        },
        {
            title: '자동차 등록원부 등본(초본)',
            description: '자동차의 소유, 저당, 변경이력 등을 확인할 수 있는 등록원부 등본·초본을 발급 및 열람 신청할 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA015&cvpl_no=15'
        },
        {
            title: '자동차 양도증명서',
            description: '자동차 소유권 이전 시 필요한 양도증명서를 발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA012&cvpl_no=13'
        },
        {
            title: '자동차 등록증 재발급',
            description: '분실, 훼손 등의 사유로 자동차 등록증을 재발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA013&cvpl_no=14'
        },
        {
            title: '자동차 말소사실증명서',
            description: '자동차가 말소 등록되었음을 증명하는 서류를 발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA021&cvpl_no=21'
        },
        {
            title: '이륜차 사용폐지증명서',
            description: '이륜차 사용을 폐지한 사실을 증명하는 서류를 발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA027&cvpl_no=49'
        },
        {
            title: '이륜차 사용신고필증 재발급',
            description: '이륜차 사용신고필증을 재발급받을 수 있는 신청 서비스입니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA026&cvpl_no=48'
        },
        {
            title: '건설기계 등록증 재발급',
            description: '건설기계 등록증을 분실 또는 훼손 시 재발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA025&cvpl_no=50'
        },
        {
            title: '건설기계 등록원부',
            description: '건설기계의 등록 정보를 확인할 수 있는 등록원부를 발급받을 수 있습니다.',
            url: 'https://www.ecar.go.kr/Application.jsp?nc_menuId=CIA024&cvpl_no=51'
        }
    ],
    education: [
        {
            title: '유치원, 초중고 재학증명서 (국문,영문)',
            description: '현재 유치원 또는 초중·고등학교에 재학하고 있음을 공식적으로 증명하는 서류입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A04007;A04001&CappBizCD=13410000017&tp_seq=01'
        },
        {
            title: '유치원, 초중고 졸업(예정) 증명서 (국문,영문)',
            description: '유치원, 초중·고등학교의 졸업 또는 졸업예정 사실을 확인할 수 있는 문서입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A04001;A04007&CappBizCD=13410000020&tp_seq=03'
        },
        {
            title: '성적증명서 중,고(국문, 영문)',
            description: '중학교 및 고등학교에서 이수한 과목별 성적을 증명하는 공식 문서입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A04001&CappBizCD=13410000016&tp_seq=02'
        },
        {
            title: '검정고시 성적증명서',
            description: '검정고시에서 취득한 성적을 확인하고 증명하는 문서입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A04001&CappBizCD=13404000019&tp_seq=02'
        },
        {
            title: '유치원, 초중고, 대입전형용 생활기록부',
            description: '유치원·초중고 생활기록부와 대학 입시 전형용 생활기록부를 발급받을 수 있는 서비스입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A04001;A04007&CappBizCD=13410000019&tp_seq=03'
        },
        {
            title: '대학수업료등면제대상자증명',
            description: '대학 수업료 등을 면제받을 수 있는 자격 여부를 확인할 수 있는 문서입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A05007&CappBizCD=11800000058&tp_seq=01'
        },
        {
            title: '교육지원대상자증명(국가유공자, 보훈보상대상자, 5.18민주유공자, 특수임무유공자 등)',
            description: '국가유공자, 보훈보상대상자 등 교육지원 대상자임을 확인할 수 있는 증명서입니다.',
            url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A05007&CappBizCD=11800000068&tp_seq=01'
        }
    ],
    // ... 다른 카테고리의 데이터
};

// 현재 선택된 카테고리
let currentCategory = 'resident';

// DOM 요소들
const categoryButtons = document.querySelectorAll('.category-buttons button');
const cardContainer = document.getElementById('cardContainer');
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

// 카테고리 버튼 클릭 이벤트 처리
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 스타일 변경
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 카테고리 변경 및 카드 업데이트
        currentCategory = button.dataset.category;
        updateCards();
        
        // 히어로 섹션 업데이트
        updateHeroContent(currentCategory);
    });
});

// 히어로 섹션 업데이트 함수
function updateHeroContent(category) {
    const heroTitle = document.querySelector('.hero h1');
    const heroDescription = document.querySelector('.hero p');
    
    const categoryContent = {
        resident: {
            title: '주민등록·가족관계',
            description: '주민등록등본, 가족관계증명서 등 신분 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '가족'
        },
        property: {
            title: '부동산',
            description: '등기부등본, 토지대장 등 부동산 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '등기'
        },
        employment: {
            title: '고용',
            description: '경력증명서, 재직증명서 등 고용 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '경력'
        },
        income: {
            title: '소득·세금',
            description: '소득금액증명, 납세증명서 등 세금 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '소득'
        },
        vehicle: {
            title: '자동차·운전',
            description: '자동차등록원부, 운전경력증명서 등 차량 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '자동차'
        },
        education: {
            title: '학업·졸업',
            description: '졸업증명서, 성적증명서 등 교육 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '졸업'
        }
    };

    const content = categoryContent[category] || categoryContent.resident;
    heroTitle.textContent = content.title;
    heroDescription.textContent = content.description;
    searchInput.placeholder = content.placeholder;
}

// 검색 기능
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterCards(searchTerm);
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterCards(searchTerm);
});

// 카드 필터링 함수
function filterCards(searchTerm) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 카드 업데이트 함수
function updateCards() {
    cardContainer.innerHTML = '';
    
    const categoryItems = certificateData[currentCategory] || [];
    categoryItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // 카드별 카테고리 이름을 결정 (각 카드마다 다른 카테고리)
        let cardCategory = "인기 자격증";
        
        // 카드 제목에 따라 카테고리 결정
        if (item.title.includes("주민") || item.title.includes("가족")) {
            cardCategory = "주민 자격증";
        } else if (item.title.includes("기본") || item.title.includes("혼인")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("입양")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("제적")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("부동산") || item.title.includes("등기")) {
            cardCategory = "부동산";
        } else if (item.title.includes("소득") || item.title.includes("세금")) {
            cardCategory = "소득·세금";
        } else if (item.title.includes("자동차") || item.title.includes("운전")) {
            cardCategory = "자동차·운전";
        } else if (item.title.includes("교원") || item.title.includes("보육")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("국민연금") || item.title.includes("건강보험")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("고용") || item.title.includes("경력") || item.title.includes("재직")) {
            cardCategory = "인기 자격증";
        } else if (item.title.includes("학업") || item.title.includes("졸업") || item.title.includes("성적")) {
            cardCategory = "학업·졸업";
        }
        
        card.innerHTML = `
            <div class="card-category">${cardCategory}</div>
            <div class="card-body">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <div class="card-footer">
                <a href="${item.url}">바로가기</a>
            </div>
        `;
        
        // 카드 전체 클릭 시 링크로 이동
        card.addEventListener('click', (e) => {
            // 링크 자체를 클릭한 경우에는 이벤트 전파를 막지 않음
            if (e.target.tagName === 'A') {
                return;
            }
            // 기본 이벤트 방지 및 현재 창에서 링크 열기
            e.preventDefault();
            window.location.href = item.url;
        });
        
        cardContainer.appendChild(card);
    });
}

// 초기 카드 로드
updateCards();

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    const heroTitle = document.querySelector('.hero h1');
    const heroDescription = document.querySelector('.hero p');
    const searchInput = document.querySelector('.search-box input');
    const logo = document.querySelector('.logo a');

    // 로고 클릭 이벤트 - 홈으로 이동
    logo.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 이벤트 방지
        
        // 카테고리 버튼 초기화 (resident 카테고리 활성화)
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        const homeButton = document.querySelector('[data-category="resident"]');
        if (homeButton) {
            homeButton.classList.add('active');
        }
        
        // 현재 카테고리를 resident로 변경
        currentCategory = 'resident';
        
        // 히어로 섹션 초기화
        const defaultContent = categoryContent['resident'];
        if (defaultContent) {
            heroTitle.textContent = defaultContent.title;
            heroDescription.textContent = defaultContent.description;
            searchInput.placeholder = defaultContent.placeholder;
        }
        
        // 카드 다시 로드
        updateCards();
        
        // 스크롤을 맨 위로
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 카테고리별 콘텐츠 정보
    const categoryContent = {
        'resident': {
            title: '주민등록·가족관계',
            description: '주민등록등본, 가족관계증명서 등 신분 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '가족'
        },
        'property': {
            title: '부동산',
            description: '등기부등본, 토지대장 등 부동산 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '등기'
        },
        'income': {
            title: '소득·세금',
            description: '소득금액증명, 납세증명서 등 세금 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '소득'
        },
        'vehicle': {
            title: '자동차·운전',
            description: '자동차등록원부, 운전경력증명서 등 차량 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '자동차'
        },
        'employment': {
            title: '고용',
            description: '경력증명서, 재직증명서 등 고용 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '경력'
        },
        'education': {
            title: '학업·졸업',
            description: '졸업증명서, 성적증명서 등 교육 관련 증명서 인터넷 발급 링크 바로가기 모음',
            placeholder: '졸업'
        }
    };

    // 버튼 클릭 이벤트 처리
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 활성화된 버튼 스타일 변경
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 카테고리 콘텐츠 업데이트
            const category = this.dataset.category;
            const content = categoryContent[category];
            
            if (content) {
                heroTitle.textContent = content.title;
                heroDescription.textContent = content.description;
                searchInput.placeholder = content.placeholder;
            }
        });
    });
}); 
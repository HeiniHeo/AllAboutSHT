use sht;

insert into FAQ (Category,question, answer) values ('income', '부부 둘다 무소득인 경우 지원가능한가요?
', '네 가능합니다. 
');
insert into FAQ (Category,question, answer) values ('income', '배우자 퇴직 시 소득 산정은 어떻게 하나요?
', '공고일 기준 퇴사자일 경우 외벌이로 보며, 공고일 이후 소득이 없다면 가구 월평균 소득에 포함시키지 않습니다. 
');
insert into FAQ (Category,question, answer) values ('income', '실업급여도 소득으로 잡히나요?
', '네 실업급여도 공적이전소득에 포함되어 소득으로 간주됩니다.
');
insert into FAQ (Category,question, answer) values ('income', '실업급여가 소득으로 잡힌다면 맞벌이로 봐야하나요?
', '아니요, 외벌이기준 소득으로 가점을 계산하셔야합니다.
');
insert into FAQ (Category,question, answer) values ('income', '이자소득과 배당소득은 어떻게 포함시키나요?
', '이자소득, 배당소득과 같은 금융소득은 2000만원 이상일시 국세청에서 소득으로 잡히며, 
2000만원이 넘으실시에는 (본인 금융소득-2000만원/12)로 월평균 소득에 포함시키시면 됩니다.
');
insert into FAQ (Category,question, answer) values ('income', '상시근로자, 프리랜서 둘다 포함될 경우 소득산정 어떻게 하나요?
', '근로에 대한 소득은 국민건강보험공단 홈페이지에 들어가셔서 보수월액을 조회하시면 되고, 프리랜서 소득에 
대해서는 국세청 홈페이지에 들어가셔서 종합소득세를 12로 나누셔서 월평균 소득에 포함시키시면 됩니다.
');


insert into FAQ (Category,question, answer) values ('property', '청약 당첨 이후 자산조회시점이 어떻게 되나요?
', '공고월 기준으로 보면됩니다만, 자산조회시점이 상이하여 보수적으로 6개월 전 후 로 관리해주시는 것이 좋습니다. 
');
insert into FAQ (Category,question, answer) values ('property', '신희타는 차량가액 제한은 없나요?
', '차량가액 제한은 없지만, 차량가액이 한번에 자산으로 들어가니 자산체크를 잘하시기 바랍니다. 
');
insert into FAQ (Category,question, answer) values ('property', '국민연금, 공무원 연금도 자산에 포함되나요?
', '국민연금과 공무원 연금은 자산에 포함되지 않습니다. 하지만 노란우산공제의 경우는 자산으로 포함됩니다.
');
insert into FAQ (Category,question, answer) values ('property', '자녀 통장에 있는 돈도 가구 자산으로 포함되나요?
', '네 부양가족 자산은 모두 자산산정에 포함됩니다.
');
insert into FAQ (Category,question, answer) values ('property', '부모님과 같이 살고 있으면 부모님 자산이 포함되나요?
', '부모님이 같은 세대원일 경우 중복으로 잡히게 되지만 같은 세대원이 아닐경우 잡히지 않습니다. 
Ex) 부모님 세대원 포함, 공고월 기준 6개월 전후로 용돈 1000만원 송금시 => 본인 자산 1000만원 + 부모님 자산 1000만원, 총 2000만원 자산으로 산정
부모님 세대원으로 미포함, 공고월 기준 6개월 전후로 용돈 1000만원 송금시  => 본인 자산 1000만원만 자산으로 산정
');



insert into FAQ (Category,question, answer) values ('income', '같은 세대원간의 돈의 이동도 잡히나요?
', '공고월 전후 6개월은 같은 세대원끼리 큰 금액을 오가지않게 해야합니다. 같은 세대원끼리 돈을 주고받을 경우 중복자산으로 잡히고, 실제로 이 사례로 자산요건 부적격자로 청약이 취소된 사례가 있습니다.
');
insert into FAQ (Category,question, answer) values ('bank', '사전청약은 청약저축통장 납입횟수도 인정이 되나요?
', '네  신혼희망타운의 경우 25.7평이하 주택의 공공분양으로 청약저축통장을 가지고도 지원할 수 있습니다.');
# webCalc

### 계산기 구현 Review

![Calculator](./app/app.jpg)

#### Calc Spec

- 사용자가 계산을 할수 있는 Web App 구현.
  - OK
- 덧셈, 뺄셈, 나눗셈, 곱셈 연산을 구현.
  - OK
- 계산 과정을 Text 창부분에 표시
  - OK
- 사용자는 0 ~9 까지의 버튼을 클릭하여 숫자를 입력.
  - OK
- 입력 숫자는 계산 결과창에 출력하여 입력된 수를 보여준다.
  - OK
- 1000단위 마다 ‘,’ 을 찍어준다.
  - OK
- 입력은 10 자리까지만 가능.
  - OK
- 소수점은 5자리까지 계산 (5자리이하 버림.)
  - OK
- “=“ 버튼을누를경우이전연산을중복수행.
  - OK
- 초기상태는 항상 0으로시작
  - OK
- C 키를 누를경우 초기화.
  - OK
- 구현된 계산기는 추후 공학용계산기등으로 확장 가능성이 있음.
  - 이 부분에 대해서는 초기 설계부터 어긋남.
- 한 화면에 여러개의 계산기가 있을 수 있음.
  - OK. 개인적으로 중간에 저장되는 변수값들 (ex. 이전 계산값)을 전역으로 쓰지 않기를 바라는 의도로 여겨짐. 이에 대해 초기 window load 이후, 내부 if문 내부에서 선언해서 처리함. (클로져 같은 방식도 생각했으나, 여러 이벤트가 동시에 한 객체를 바라봐야 하므로 클로져로는 무리가 있음.)


#### FE제약사항

- (필수) Framework 는 사용금지. 단 구조는 원하는 데로 구성 가능.
  - OK
- (선택) IE8 에서도 에러없이 동작 해야함.
  - OK. 윈도우 PC가 없어서 safari의 사용자 Agent로 확인했을 때, 구동함을 확인함.
- (선택) Uint 테스트 포함. 로컬에서 확인 가능 해야함.
  - X
- (선택) Grunt / Gulp 빌드를 사용시 가산점 +
  - OK. sass와 jshint에 대한 빌드.


#### 마크업 제약사항

- (필수) SASS 의 기능을 최대한 활용하세요.
  - OK
- (필수) 반응형 대응이 되어있어야합니다.
  - OK
  - 모바일에서는 전체화면 / PC웹 에서는 가로세로 정중앙에 위치
    - OK
    - userAgent 기준과 화면 width 기준 중에서 화면 width를 기준으로 작업. width 600px 이하를 모바일로 취급하고 작업을 진행.
- (필수) 계산기의 각 버튼이 눌릴 때, 눌림 효과가 필요합니다.
  - OK
- (필수) 클래스 1개를 추가하여 화면 좌 하단에 숨겨놓을 수 있습니다.
  - 어떤걸 좌 하단에 숨길 수 있다는 건지 불명확. 그리고, 이 말로 class 요소를 쓰지 말라는 것이 유추됨...
- (필수) 최소화 되는 애니메이션을 CSS 로 구현하세요.
  - OK
- (선택) 계산기 디스플레이는 최대 두 줄 까지 표시되고 스크롤합니다.
  - OK
- (선택) 가능한한 모든 UI는 이미지 없이 CSS만으로 표현하세요
  - OK


#### 개인적인 총평

간단한 계산기를 생각했으나, 막상 힘을 주고 만들고자 하니 상당히 복잡했다. 주말에 GDG 일정이 낀 상태에서 마무리를 하려하니 상당히 많은 시간이 소요되었다. 모호한 표현들에 대해 고민되는 부분들이 몇몇 있었으나 마무리 되었다. 한정된 시간안에 만들어보는건 처음이라 새로운 경험이었다. 현재 테스트 코드 작성이 미완성된 상태인데, 최대한 추가할 수 있도록 해봐야 겠다.
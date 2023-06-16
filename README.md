### Components

#### App.jsx

Cards, Input 컴포넌트를 하위로 가지고 있습니다.
각종 데이터를 다루고 추가하기, 수정, 삭제, 완료 동작기능이 담겨져 있습니다.

#### Cards.jsx

각 카드들의 구조가 담겨져 있습니다.
요소와 함수 2가지를 통해 내용을 변경할 수 있습니다.
Button 태그가 하위로 포함되어 있습니다.
UpdateContent 태그가 하위로 포함되어 있습니다.

#### UpdateContent.jsx

1.0 이후 수정기능 추가할 때 만들어진 컴포넌트입니다.
수정 버튼을 누르면 기존에 담겨져 있던 제목과 내용을 입력받는 컴포넌트 입니다.

#### input.jsx

입력받는 구간이 어떻게 생겼는지 담겨져 있는 컴포넌트 입니다.
라벨을 붙일 수 있고 값과 그 값을 다루는 함수에 따라 작동하게 됩니다.

#### Button.jsx

버튼이 클릭되면 fnc에 따라(함수)동작하는 것이 다릅니다.

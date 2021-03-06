위키북스의 '프로 리액트'라는 책을 보고 리액트를 공부해 보려고 합니다.

이전에 잠깐이지만 인터넷을 찾아보고, https://velopert.com 에 소개되어있더 리액트를 보면서 얇게나마 공부를 해봤었습니다.

다만, 예제를 따라하면서 봤던것들과, 직접 구상해 구현하는것에는 너무 큰 차이가 있었고 다시 공부를 해야겠다고 생각했었습니다.

마침 이 책을 접할 기회가 되어서 공부를 해 보려고 합니다.

어떤 개념이 책에 담겨있었는지를 간단히(?) 정리할 생각이라, 이전에 Velopert.com을 통해 정리했던 내용과 같이 보면 되지 않을까, 라는 생각을 하고있습니다.

-----------------------------------------------------------------------------------------------

# React.js

React는 JavaScript와 (선택적인)XML사용을 통해 조합형 사용자 인터페이스를 구축하는 일종의 엔진입니다.
이 책에서 React를 엔진이라고 하는 이유는, React의 핵심 장점중 하나인 반응현 UI 렌더링 잘 나타내는 용어라는 이유를 들고있습니다.
React의 핵심개념, 목표는 UI의 생성과 유지 관리의 복잡성을 줄이는 것이며, 이를 위해서 UI를 컴포넌트로 분리하는 개념을 이용하고 있습니다.
컴포넌트라는 특정 목적을 가진 독립형 구성요소를 사용함으로써 재사용과 확장, 유지관리가 쉬워지게 되는 장점을 가지게 됩니다.

----------------------------
## React.js의 장점
단일 페이지 어플리케이션이전에는 사용자와 페이지간 상호작용에 있어서 이를 처리하기 위해서는 사소한변화라도 완전히 새로운 페이지를 서버로부터 불러와야만 했습니다.
단일 페이지 어플리케이션이라는 개념이 생겨나면서 사용자와 상호작용하는 동안 끊임없이 새로운 데이터를 가져오고, 이를 DOM에 반영하게 되었습니다.

반응형 렌더링은 그저 정의만 해두면, 리액트가 데이터의 변경을 감지하고 개념상, 전체 인터페이스를 다시 렌더링하는것을 의미합니다.
이때, 실제 DOM에 전체 인터페이스를 다시 렌더링하는것은 비용이 매우 큰 작업이며, 여기서 _VirtualDOM_ 이라는 개념이 등장합니다.

### VirtualDOM
VirtualDOM. 말 그대로 가상의 DOM입니다.
실제 데이터의 변경시마다 실제 DOM 전체를 다시 그리는것은 비용이 큰 작업이기때문에, 리액트에서는 VirtualDOM을 사용하게 됩니다.
리액트는 어플리케이션의 상태가 달라질 때 UI의 현재상태와 원하는 상태를 비교하고, 변경의 최소집합으로 VirtualDOM을 이용하여 변화가 생긴 부분만을 렌더링하게 됩니다.
책의 뒷부분인가 좀 더 내용이 나왔던거같은데.. 
나중에 포스팅때에는 이전에 정리해두었던 VirtualDOM에 대한 내용을 참고해야될것 같습니다.

### 순수 자바스크립트를 이용한 컴포넌트 기반 개발
리액트 어플리케이션의 모든 부분은 특정한 목적을 가진 독립형 구성요소인 컴포넌트로 구성됩니다.
리액트의 경우 기존 웹 어플리케이션의 UI가 HTML과 같은 마크업언어를 통해 UI를 표시하던것과는 다르게, 일반 자바스크립트 언어를 사용하게 됩니다.
완전한 기능을 갖춘 프로그래밍언어를 사용하므로써 추상화를 구축하는 데 큰 장점이 있습니다.
컴포넌트는 독립적이며, 뷰 논리에 대하여 마크업 언어를 사용함으로써 관심사의 분리를 돕게됩니다.
이런 방식은 관심사의 강제 분리를 위해 서로 다른 언어로써(HTML, CSS, Javascript)구조, 스타일링, 동작을 구현하였고, 정적인 프레젠테이션 스타일에서는 효과적이였지만,
현재의 인터페이스는 더 복잡하며, 어쩔 수 없이 표시 논리와 마크업이 서로 연관되게 됩니다.
결론적으로 리액트에서는 표시 논리와 마크업이 서로 연관되어있다고 가정하게됩니다.
리액트는 이 둘 모두 UI를 표시하는 역할을 하며, 각 관심사에 대해 독립적이고, 잘 캡슐화되며, 재사용 가능한 컴포넌트를 만드는 방식으로 관심사의 분리를 권장합니다.

### 문서 모델의 유연한 추상화
리액트는 기반 문서 모델을 추상화하는, UI의 경량 표현을 자체적으로 가지고있습니다.
이를통해 웹용 HTML은 물론, iOS와 안드로이드 뷰를 렌더링 할 때에도 동일한 원칙을 적용할 수 있게됩니다.
예를들어 onclick과 같은 이벤트가 모든 브라우저와 장치에서 자동으로 위임을 이용해, 일관되고 표준을 준수하는 방식으로 작동됩니다.

-----------------------------------

## JSX
리액트에서 자바스크립트 코드 안에 선언적인 XML스타일의 구문을 작성할 수 있게 해주는 리액트의 선택적 자바스크립트 구문 확장입니다.
트랜스파일이라는 브라우저나 서버가 코드를 해석 할 수 있도록 자바스크립트로 변환하는 과정을 거치게 되면, XML구문은 리액트 라이브러리에대한 함수 호출로 변환됩니다.
```javascript
    return(
        <div>
            <h1>Hello World</h1>
            <h2>React Study</h2>
        </div>
    )
```
위의 코드는 트랜스파일을 거치게 되면 아래와 같은 함수 호출로 변환됩니다.
```javascript
    return React.createElement("div", null,
        React.createElement("h1", null, "Hello World"),
        React.creatElement("h2", null, "React Study")
    )
```

# JSX의 장점
```
JSX를 이용하게되면 아래와 같은 장점이 있습니다.
1. 선언식 구문을 이용할 수 있다. XML은 특성을 이용한 요소트리로 UI를 표현하는데 적합하다.
2. 표현성이 좋다. 어플리케이션의 구조를 시각화하기 쉬우며 더 간결하다.
3. 일반 자바스크립트 함수 호출로 변환되어, 언어의 의미를 바꾸지 않는다.
```

# JSX와 HTML의 차이점
```
HTML과 비슷하게 웹 인터페이스를 표현하지만, JSX는 HTML과는 아래와 같은 차이점이 있습니다.
1. 낙타표기법을 사용한다.
:: 기존 HTML에서 태그의 속성이름은 소문자로 작성했던것과는 다르게, JSX에서는 낙타 표기법을 사용합니다(ex. maxlength --> maxLength)
2. 모든 요소는 짝이 맞아야 한다.
:: JSX는 XML이기때문에 태그를 열고 닫는데에 있어서 엄격한 검사를 수행합니다. HTML과는 다르게 태그가 열렸다면 닫혀야만 합니다. <br>태그도 <br/>를 사용해야 합니다.
3. 특성 이름이 HTML이 아닌, DOM API에 기반을 둔다.
:: JSX는 자바스크립트의 구문확장이기때문에 HTML속성이 아닌, 자바스크립트를 이용해 DOM을 조작할때의 특성 이름을 따르게 됩니다.
:: 그 예로, HTML에서는 class속성을 통해 해당 요소의 클래스를 지정하지만, 자바스크립트에서는 className을 이용하게됩니다. 결과적으로 JSX에서도 className을 사용합니다.
```

# 단일 루트 노드 렌더링
리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있습니다.
```javascript
    return(
        <h1>hello world!</h1>
    )
```
구문은 트랜스파일을 거치게되면 아래와 같이 변화됩니다.
```javascript
    return React.createElement("h1", null, "hello world!");
```

이때, 만약 하나의 단일 루트에 대해서가아닌 여러 컴포넌트에 대하여 return일 경우. 즉, 아래와 같을경우
```javascript
    return(
        <h1>hello world!</h1>
        <h2>Kang Seokju</h2>
    )
``` 

이런 문장은 React.createElement를 두번 호출하며, 이 경우 유효하지 않습니다.
가장 간단한 해결법으로는 모든 반환 값을 하나의 루트 객체에 래핑하는 것입니다.
```javascript
    return(
        <div>
            <h1>hello world!</h1>
            <h2>kang Seokju</h2>
        </div>
    )
```

# 조건문
JSX는 자바스크립트로의 변환과정을 거치게 되며, 이때 if문의 사용은 올바른 용도로 사용되지 못하고 에러를 발생시킵니다.
어떤 조건에 따라서 JSX에서 사용할 값을 달리하고 싶을때는 삼항식을 사용하거나 조건을 JSX밖으로 이동하여, 변수로 처리할 수 있습니다.
1. 삼항식 사용
```javascript
    render(){
        return(
            <div className={condition?"AAA":""}>
                Hello World
            </div>
        )
    }
```
혹은
```javascript
    <div>
        {condition?
            <span>Hello World</span>
        :null}
    </div>
```
와 같이 사용이 가능합니다.
JSX가 트랜스파일을 거치면서 자바스크립트코드가 된 이후에도, 삼항식은 유효하게 작동하게 됩니다.

2. 조건을 JSX밖으로 이동
간단한 조건문의 표현식에는 삼항식을 이용하여 짧게 처리할 수 있지만, 복잡한 조건식 혹은 조건에 따라 아예 다른 컴포넌트를 렌더링 할 필요가 있는경우에는 이 방법을 사용합니다.
```javascript
    render(){
        let classType;
        if(condition){
            classType = "AAA";
        }
        return(
            <div className={classType}>Hello World</div>
        )
    }
```
```javascript
    render(){
        let renderComp;
        if(condition){
            renderComp = (
                <div>
                    Comp1
                </div>
            )
        }
        return(
            <div>
                {renderComp}
            </div>
        )
    }
```
JSX에서는 null, false, undefined를 렌더링하게 되면 아무것도 렌더링 되지 않는다는 특징을 가지고 있습니다.
그때문에 위의 코드들이 조건에 따라서 오류없이 유효한 렌더링결과를 가지게 됩니다.
위의 <div>태그에서 className의 속성에서의 경우에도 리액트는 className특성을 지정하지 않게됩니다.

# 주석
JSX는 결국에는 자바스크립트로 변환되기때문에 HTML주석을 사용하지 않습니다.
대신, 일반 자바스크립트 주석을 사용 할 수 있으며, 이때 주석의 위치가 자식태그의 위치일 경우에는 중괄호로 감싸 주어야 합니다.
태그의 속성에서 사용될 경우엔 일반적인 주석처럼 사용하면 됩니다.
```javascript
    <div>
        {/*주석*/}
        <Info 
          /*주석*/
          //주석
          className="AAA"//주석
        ></Info>
    </div>
```

# JSX안에서 HTML태그 렌더링
기본적으로 리액트는 XSS(Cross-Site Scripting)공격을 막기 위해서 JSX내에서 HTML태그를 렌더링하는것을 금지합니다.
그렇기 때문에 기본적으로는 HTML태그를 render()함수 내에서 렌더링시에는 해당 문자열이 그대로 출력되게됩니다.

만약 XSS공격에 대한 대응을 충분히 하였고, 그렇기때문에 JSX내에서 HTML태그를 렌더링 할 필요 역시 있다면, 아래와 같은 방법으로 사용할 수 있습니다.

```javascript
    render(){
        let htmlcode = "<h1>hello</h1>";
        return(
            <span dangerouslySetInnerHTML={{__html:htmlcode}}></div>
        );
    }
```
위 코드처럼, dangerouslySetInnerHTML을 사용하여 렌더링 할 수 있게됩니다.

# 인라인 스타일링
JSX를 이용하여 컴포넌트를 작성한다는 것은 XML트리구조의 마크업언어를 통해 UI를 정의한다는것과 그에대한 기능/상호작용을 결합하는 것입니다.
관심사의 분리를 위해서는 각 관심사에 대하여 잘 캡슐화되고, 독립적이고, 재사용 가능한 컴포넌트를 사용해야합니다.
하지만 UI의 경우에는 이 외에도 스타일링을 고려해야 합니다.

리액트에서는 인라인 스타일링을 자바스크립트 객체로 지정합니다.
이때 속성의 이름은 낙타표기법을 사용하며, 리액트에서는 자동으로 스타일의 적절한 단위를 선택해주는 기능을 제공하기때문에 따로 픽셀 단위를 지정 할 필요는 없습니다.

```javascript
    render(){
        let changeStyle={
            width:100,
            height:30,
            backgroundColor:'#ee9900'
        };
        return <div style={changeStyle}>Hello World</div>
    }
```

보통의 경우에는 CSS를 주 스타일로 사용을 하며, 컴포넌트의 상태 변화에 따라서 동적으로 스타일을 변경해 줄 때에 인라인 스타일링을 활용하는, 하이브리드 방식이 일반적입니다.







아래는 그냥 JSX관련해서 잠깐 궁금했던 사항이라고나할까..
React소스를 보게 되면 제일 위에 이런 import문이 적혀있는것을 볼 수 있습니다.
```javascript
    import React from 'react';
    Class Hello extends React.Component{
        ...
    }

    import React, {Component} from 'react';
    Class Hello extends Component{
        ...
    }
```

보통 컴포넌트 클래스를 만들 때 위와같은 방식으로 작성 할 수 있게됩니다.
위의 두 코드를 보고 그저 _'import {Component} from 'react''_ 라고 적으면 실행되지 않을까? 라는 생각을 했었는데 
결론은 실행되지 않았습니다.
익셉션이 발생하고 해당 컴포넌트에 _'React' must be in scope when using JSX_ 라는 에러메시지가 나타나게 됩니다.
아예 React를 import하지않으면 JSX사용 자체가 안되는것같습니다.

- Local변수 렌더링
JSX를 사용하면서 let/var 등으로 Local변수를 선언한 후에 이 값을 JSX내에서 렌더링시에 사용 할 수 있습니다.
아래와 같이 중괄호를 통해 표현합니다.

```javascript
    render(){
        var name="SeokJu";
        return(
            <h1>{name}</h1>
        );
    }
```

- className속성
html에서 css를 지정할 때 사용했던 class속성은 리액트에서는 className으로 표기해야 합니다.
```javascript
    <div className="title_main">
        ....
    </div>
```
---------------------------------------------

## 속성과 상태(Property / State)

### 속성(Property)
리액트는 재사용 가능한 간단한(그리고 독립적인)컴포넌트를 중첩하고 조합하여 복잡한 UI를 만드는 방식을 권장합니다.
이때 각각의 컴포넌트를 재사용가능하고 조합할 수 있도록 하기위해 리액트에서는 _속성(Property)_ 를 제공합니다.
속성이란, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전송하는 것으로, 자식컴포넌트에서는 이를 변경할 수 없으며, 속성은 부모가 소유하게 됩니다.

_부모컴포넌트_
```javascript
    class User extends Component{
        render(){
            <div>
                <UserInfo age="25">Kang SeokJu</UserInfo>
            </div>
        }
    }
```
_자식컴포넌트_
```javascript
    class UserInfo extends Component{
        render(){
            return(
                <h1>{this.props.children} : {this.props.age}</h1>
            );
        }
    }
```
__'Kang SeokJu : 25'__ 

위의 코드와 같이, 부모는 컴포넌트의 속성을 통해서 자식컴포넌트에 데이터를 전송합니다.
이는 자식 컴포넌트에서 _this.props.속성명_ 으로 접근이 가능하며,
부모 컴포넌트의 열린태그와 닫힌태그사이에 값을 작성할 경우, _this.props.children_ 으로 부모컴포넌트로부터의 데이터를 받을 수 있습니다.

##### defaultProps
자식 컴포넌트에서 지정하는 속성의 기본값으로, 부모 컴포넌트에서 원래 전달되어야 할 속성이지만 경우에 따라서 전달받지 않았을 경우 기본값으로 사용될 속성을 지정합니다.
아래의 코드는 위에서 속성에 대해서 설명했던 코드를 조금 수정하여 사용하겠습니다.
```Javascript
   class UserInfo extends Component{
        render(){
            return(
                <h1>{this.props.children} : {this.props.age}</h1>
            );
        }
    }
    UserInfo.defaultProps={
        age : 21
    }
```
위와같이 defaultProps를 지정해줄 경우 부모 컴포넌트에서 자식 컴포넌트를 사용 시 
```Javascript
    <UserInfo>Kang SeokJu</UserInfo>
```
와 같이 작성 할 수 있으며, 자식컴포넌트 내부에서 age속성에 대해선 기본값으로 21을 적용합니다.

### 상태(State)
속성은 정적 컴포넌트를 위한, 변경할 수 없는 값(Immutable)입니다.
하지만 우리는 사용자와 상호작용하는 컴포넌트를 만들기위해서는 계속해서 갱신되는, 쓰기 가능한 데이터가 필요하며 이를 컴포넌트의 상태(State)로 관리합니다.
특정(어떤) 컴포넌트의 상태값은 _this.state_ 를 통해 접근이 가능하며, _this.setState()_ 를 통해 상태의 값을 변경할 수 있습니다.
이때, setState()를 통하지 않은 직접적인 this.state의 값 변경은 권장되지 않습니다.

리액트에서는 상태가 업데이트되면 컴포넌트의 반응형 렌더링이 트리거되고, 해당 컴포넌트와 그 자식 컴포넌트가 새로 렌더링됩니다.

컴포넌트의 초기값을 넣어줄 때에는 생성자 함수를 사용합니다.
```Javascript
    class User extends Component{
        constructor(){
            super(...arguments);
            this.state={
                name : "Kang SeokJu",
                age : 25
            };
        }
    }
```
상태를 이용하게 되면서 특정 상태값에 따라 컴포넌트가 다른 값을 리턴하도록 유도할 수 있습니다.
아래와 같은 코드가 그런 코드이며, 리액트에서는 null 혹은 undefined의 값은 렌더링되지 않기때문에,
divFlagment의 값에 따라 return되는 컴포넌트가 다른값을 렌더링하게 됩니다.
```Javascript
    render(){
        let divFlagment;
        if(this.state.flag){
            divFlagment=(
                <div>
                    ....
                </div>
            );
        };

        return(
            <div>
                ....
            </div>
            {divFlagment}
        );
    }
```
--------------------------
## 컴포넌트 계층 정의 시 고려해야할 사항
1. 컴포넌트는 단일 관심사를 가져야 하며, 추가 기능이 생길시에는 하위 컴포넌트로 분할해야 한다.
2. 프로젝트의 와이어프레임, 레이아웃을 분석하여 컴포넌트 계층을 유추한다.
3. 인터페이스와 데이터모델은 동일한 정보 아키텍처를 따르는 경우가 많으므로, 데이터 모델에 주목한다.

--------------------------
## Event
리액트는 리액트 어플리케이션과 인터페이스에 대하여 일관성과 고성능을 보장하기 위해서, 여러 브라우저와 플랫폼에서 이벤트에 대하여 동일한 속성을 가지도록 이벤트를 정규화 합니다.
또한 리액트에서는 고성능을 위해 단 하나의 이벤트 리스너만을 루트에 연결하며, 이벤트 발생시 이를 적절한 컴포넌트 요소로 매핑시켜 작동하게 된다고 합니다.

리액트의 이벤트 처리 API는 HTML의 방식과 유사합니다.
리액트의 이벤트는 낙타 표기법을 적용하며, 이전에 언급했던 것처럼 모든 브라우저와 장치에서 일관성을 유지하기위해 여러 브라우저에서의 이벤트의 여러 변형의 하위집합을 구현합니다.

이벤트를 컴포넌트에 등록하는 코드는 아래와 같습니다.

```Javascript
    <div className="title_main" onClick={
        ()=>this.setState({ ... })
    }>
    </div>
```
혹은 메서드를 선언하고 이를 바인드하는 방식으로 이벤트를 컴포넌트에 적용시킬 수 있습니다.
```Javascript
    Class AAA extends Component{
        constructor(){
            ...
        }
        event1(){
            this.setState({ ... });
        }
        render(){
            return(
                <div className="title_main" onClick={this.event1.bind(this)}></div>
            )
        }
    }
```


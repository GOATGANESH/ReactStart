# &nbsp;	      REACT JS





 	Import/Export

 		- export default varname/functionname

 		- export varname ( need {} to import)

 		- import component name from path



 	-fragmentation

 		-<></> use to pass empty container to root

 

 	-props

 		- passing arguments to function

 		- function accepts arguments in form of objects

 		- {} is necessary to use

 	- Inline style

 		- use style={{property:'value'}}



 	- module css

 		- make separate css for each component

 		- import styles from 'header.module.css'

 		- use => style={styles.className}



 	-function calling

 		- < div onClick={functionname only (no brackets, brackets means call the function)} >

 		- or <div onClicke={function (event){

 				//functionname(event)

 				//code

 			}}

 	- localStorage

 		- mini storage for particular URL

 		- localStorage.clear()

 		- localStorage.setItem(key(string),value(string))

 		- localStorage.getItem(key)

 		- localStorage.removeItem(key)

 		- if we want to store object as value then localStorage.setItem(key,JSON.stringify(obj))

 		- convert string to obj ,=> JSON.parse(string)



 	- API calling in react

 		- there are two ways

 		- fetch()

 		- axios

 			=> import axios from 'axios' then

 			- const res=await axios.get(url)

 	-Routing

 		- help to create SPA(single page application)

 		- need external library react-router-dom

 		-the whole page is wrapped inside {BrowserRouter}

 		- within <Routes></Routes> the <Router path='/' element={component}/></Router>

 		  defines route

 		- <Link to=''></Link> prevent reloading and navigate on page

 		- <Route path='\*' element={<NotFound/>}> for unknown route

 

 		- Nested Route

 			- one way is to path='/page1/page2'

 			- second is nested route like Route1 --> route11,route12



 		- Dynamic Route

 		\*\*-\*\* it routes the user to different pages instead of notfoundpage



 			  on searching anything



 			- <Route path='/courses/:anyname'>

 			- useParams() => gives object with string in URL



 		- Navigation through page

 			-useNavigate() returns function which take either '/' or +1/-1 to go

&nbsp;		      next or back



&nbsp;		- Context API

&nbsp;			- Data centerlization

&nbsp;			- Context creation > context Provider > context user

&nbsp;			- we wrapped entire app around Context

&nbsp;			- e.g.

&nbsp;				- export const ContextVar=createContext()

&nbsp;				- <ThemeDataContext><App/></ThemeDataContext>

&nbsp;				- in theme context use 

&nbsp;					<ContextVar.Provider value={}/''> 

&nbsp;						{props.children}

&nbsp;					</ContextVar.Provider>

&nbsp;				- then anywhere const \[theme,setTheme]= useContext(ContextVar)

&nbsp;				

 

 



 	-Hooks

 		- Inbuilt functions used to make code reliable,high performance,optimize

 		-useState,useEffect,useRef,useContext,useMemo,useCallBack,useReducer



 	i)useState

 		- changes state of variable in UI

 		- const\[varName,setVarValue]=useState(initialValue)

 		- setVarValue() works asynchronously

 		- to work with array or object using state

 			- const\[arr,setArr]=useState(\[9,1,2,3])

 			- i) destructuring => newArr=\[...arr] then setArr(newArr)

 			- ii)arrow function => setArr(\[...arr,newVal])

 			- const\[obj,setObj]= useState({name:'ganu',age:20})

 			- destructuring => newObj={...obj} then setObj(newObj)

 			- arrow function => setObj(prev=>({...prev,name:'mau'})

 		- batch update

 			- when multiple setter functions call it works asyncly and therefore

 			  delay in value updation so we do this

 			- setValue(prev=>(prev+1)) // ensures latest value

 		-Two way binding

 			- specially on input ,instead of interacting with input field

 			  directly we use react to manage input field

 			- value={title} , onChange={()=>{setTitle(e.target.value)}}

 

 		- passing data from child to parent

 			- callback function is used

 			- send one function as props and recive {funcname}

 





 	ii) useEffect

 		- when we want to use Side effects or want to run code parallely

 		- this tell react after painting dom do this also

 		- it run everytime if no dependencies(variable) given

 

 		- useEffect(function(){},\[])

 		- useful in API calls,dom manipulation,Event handling,etc

 	

&nbsp;	iii) useContext()

&nbsp;		- access context data	

&nbsp;	

&nbsp;	iv) useParams() 

&nbsp;		- gives object having data of URL used in dynamic routing



&nbsp;	 v) useNavigate()

&nbsp;		- provide function to navigate through pages(maintain history)



&nbsp;	 

 

 

 


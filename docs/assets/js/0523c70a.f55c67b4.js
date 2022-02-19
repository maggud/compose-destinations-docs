"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[634],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,v=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(v,r(r({ref:t},m),{},{components:n})):a.createElement(v,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Bottom bar navigation",c={unversionedId:"common-use-cases/bottom-bar-navigation",id:"common-use-cases/bottom-bar-navigation",title:"Bottom bar navigation",description:"One of the common cases for Android development is to have a bottom bar to navigate between the main entry point destinations of an application.",source:"@site/docs/common-use-cases/bottom-bar-navigation.md",sourceDirName:"common-use-cases",slug:"/common-use-cases/bottom-bar-navigation",permalink:"/common-use-cases/bottom-bar-navigation",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/common-use-cases/bottom-bar-navigation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code generation configs",permalink:"/codegenconfigs"}},m=[],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bottom-bar-navigation"},"Bottom bar navigation"),(0,i.kt)("p",null,"One of the common cases for Android development is to have a bottom bar to navigate between the main entry point destinations of an application."),(0,i.kt)("p",null,"With Compose Destinations, achieving it is not too different than with normal Jetpack Compose Navigation, you just have some new tools to make it easier."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Firstly, you need some kind of closed set of Destinations that will be a part of that Bottom Navigation bar."),(0,i.kt)("br",{parentName:"p"}),"\n","For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class BottomBarDestination(\n    val direction: DirectionDestinationSpec,\n    val icon: ImageVector,\n    @StringRes val label: Int\n) {\n    Greeting(GreetingScreenDestination, Icons.Default.Home, R.string.greeting_screen),\n    Feed(FeedScreenDestination, Icons.Default.Email, R.string.feed_screen),\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also use a sealed class, sealed interface, whatever you like. The reasons I personally like enum in this case are: "),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Enums have a ",(0,i.kt)("inlineCode",{parentName:"li"},"values()")," function which comes in handy to populate the bottom bar Composable (as we'll see next)."),(0,i.kt)("li",{parentName:"ol"},"All entries of this closed set probably have the exact same properties/functions so there is really no benefit in using sealed class over it.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Secondly, create your bottom bar Composable."),(0,i.kt)("br",{parentName:"p"}),"\n","Taking the example from above, that could look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun BottomBar(\n    navController: NavController\n) {\n    val currentDestination: Destination? = navController.currentBackStackEntryAsState()\n        .value?.navDestination\n\n    BottomNavigation {\n        BottomBarDestination.values().forEach { destination ->\n            BottomNavigationItem(\n                selected = currentDestination == destination.direction,\n                onClick = {\n                    navController.navigateTo(destination.direction) {\n                        launchSingleTop = true\n                    }\n                },\n                icon = { Icon(destination.icon, contentDescription = stringResource(destination.label))},\n                label = { Text(stringResource(destination.label)) },\n            )\n        }\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"navDestination"),' is just a handy generated extension property when in "singlemodule" mode (read about configurations ',(0,i.kt)("a",{parentName:"p",href:"../codegenconfigs"},"here"),").",(0,i.kt)("br",{parentName:"p"}),"\n","It internally uses ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry.destinationSpec(navGraph: NavGraphSpec)")," from the core library, so if you have a multi-module app, you can use that method instead to get the destination spec corresponding to a given ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry")," in a given ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphSpec")," (you can just use the root one that contains all destinations in its tree)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally, use the Composable on your Scaffold's ",(0,i.kt)("inlineCode",{parentName:"strong"},"bottomBar")," slot")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Scaffold(\n    bottomBar = { \n        BottomBar(navController)\n    }\n    //...\n)\n")),(0,i.kt)("p",null,"Some considerations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You could make it so you ",(0,i.kt)("inlineCode",{parentName:"li"},"BottomBar")," Composable only receives the current destination and a lambda to be used when an item gets clicked. This makes your bottom bar more testable and separated from navigation code."),(0,i.kt)("li",{parentName:"ol"},"If each of your bottom bar items corresponds to different navigation graphs, your ",(0,i.kt)("inlineCode",{parentName:"li"},"BottomBarDestination")," enum could contain ",(0,i.kt)("inlineCode",{parentName:"li"},"NavGraphSpec"),"s instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"DirectionDestinationSpec"),"."),(0,i.kt)("li",{parentName:"ol"},'The actual code to navigate can use save and restore states to implement this in a "multi nav back stack" way (read more in ',(0,i.kt)("a",{parentName:"li",href:"https://medium.com/androiddevelopers/multiple-back-stacks-b714d974f134"},"official article")," or see an example of it in my ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/raamcosta/tivi"},"tivi's fork"),").  "),(0,i.kt)("li",{parentName:"ol"},"Keep in mind that if at any time you need to fallback to using Jetpack Compose Navigation APIs, you can always just get the route by ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinationSpec.route"),". So all approaches you might find out there, can always be implemented with Compose Destinations as well.")))}d.isMDXComponent=!0}}]);
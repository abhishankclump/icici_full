import React from 'react';


import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Accordion from './src/screen/Accordian';
import Investor from "./src/screen/InvesterServices"
import Investorone from "./src/screen/InvesterTow"
import Risk from './src/screen/Risk'
import Risktwo from './src/screen/Risktwo';
import MainScreen from './src/screen/MainScreen';
import ChangeMpinOne from './Components/ChangeMpinOne';
import ChangeMpinFour from './Components/ChangeMpinFour';


// import Mpinfivepopup from './Components/inSuccessfull';
import ChangeMpinThree from './Components/ChangeMpinThree';
import ChangeMpinTwo from './Components/ChangeMpinTwo';
import Logoutpopup from './Components/LogoutPopup';
import Verifymobile from './Components/verifymobile';
import ChangePasswordOne from './Components/ChangePasswordOne';
import ChangePasswordThree from './Components/ChangePasswordThree';
import ChangePasswordFour from './Components/ChangePasswordFour';
import Cpsix from './Components/ChangePasswordSuccesful';
import ChangePasswordFive from './Components/ChangePasswordFive';
import Adblockone from './Components/ActionSheet';
import Adblocktwo from './Components/CenterSheet';
import Adblockthree from './Components/FullScreen';
import Surveyone from './Components/Poll'
import AboutUs from './Components/about/Aboutus';
import { DescriptionCard } from './Components/about/Showmore';
import Moreoption from './Components/Moreoption';
import More from './Components/More';
import MobileThree from './Components/VerifyNumber';
import MobileFive from './Components/ChangeEmailSuccesful';
import MobileTwo from './Components/SelectItemToChange';
import Foliolist from "./src/components/Foliolist";
import MobileFour from './Components/ChangeMobileOne';
// import Riskthree from './src/screen/Riskthree';
import SecuritySetting from "./src/screen/Securitysetting"
import SetFace from "./src/screen/SetFace"
import Poll from "./src/screen/Poll"
import PollTwo from "./src/screen/SurveyQuizOne"
import ServeyOne from "./src/screen/Survey"
import ServeyTwo from "./src/screen/SurveyTwo"
// import serveyThree from "./src/screen/ServeyThree"
import ChangeEmail from "./Components/changeemail"
import ChangeMobileOne from "./Components/ChangeMobileOne"
import RiskThree from "./src/screen/RiskThree"
import SurveyMain from "./src/screen/surveyMain"
//import NoteState from './Context/NoteState';
import HolidayPlannerOne from "./src/screen/HolidayPlannerOne"
import HolidayPlannerTwo from "./src/screen/HolidayPlannerTwo"
import HolidayPlannerThree from "./src/screen/HolidayPlannerThree"
import HolidayPlannerFour from "./src/screen/HolidayPlannerFour"
import HolidayPlannerFive from "./src/screen/HolidayPlannerFive"
import HolidayPlannerSix from "./src/screen/HolidayPlannerSix"
import NewInvestor from "./src/screen/NewInvestor"
import MappedScheme from "./src/screen/MappedScheme"
import MappedSchemeNext from "./src/screen/MappedSchemeNext"
import Payment from "./src/screen/Payment" 
import CheckOut from "./src/screen/CheckOut"
import Biller from "./src/screen/Biller"
import FirstTime from "./src/screen/FirstTime"
import GoalSavedsuccesfully from "./src/screen/GoalSavedSuccesfully"
import SecondTime from "./src/screen/SecondTime"
import ThankyouOTM from "./src/screen/ThankyouOTM"
import OneTime from "./src/screen/OneTime"
import OneTimeCardOne from "./src/screen/OneTimeCardOne"
import OTMcreatedOne from "./src/screen/OTMcreatedOne"
import OTMcreatedTwo from "./src/screen/OTMcreatedTwo"
import OTMcreatedThree from "./src/screen/OTMcreatedThree"
import PaymentViaPhonePay from "./src/screen/PaymentViaPhonePay"
import RedirectPage from "./src/screen/RedirectPage"
import SucessScreen from "./src/screen/SucessScreen"
import SecandTimeTwo from "./src/screen/SecandTimeTwo"
import ThankyouPageBiller from "./src/screen/ThankyouPageBiller"
import Modiify from "./src/screen/Modify"
import BankPortal from "./src/screen/BankPortal"
import PaymentOne from "./src/screen/PaymentOne"
import CheckOutOne from "./src/screen/CheckOutOne"
import Custom from "./src/screen/Custom"
import OptionOne from "./src/screen/OptionOne"
import SelectFolio from "./src/screen/SelectFolio"
import DreamHouse from "./src/screen/DreamHouse"
import AutopayMandate from "./src/screen/AutopayMandate"
import TopUpAmount from "./src/screen/TopUpAmount"
import TopUpAmountOne from "./src/screen/TopUpAmountOne"
import BillerRegistration from "./src/screen/BillerRegistration"
import NewOtm from "./src/screen/NewOtm"





const MyStack = createStackNavigator();








const App = () => {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(()=>({
    toggleTheme: () => {
        setIsDarkTheme( isDarkTheme => !isDarkTheme)
    }
  }))
  

 
  return (

    <>
    
  
   
    <SafeAreaProvider>
       
      <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer>
        <MyStack.Navigator headerMode="none">
          <React.Fragment>

          <MyStack.Screen name="DreamHouse" component={DreamHouse} />

          <MyStack.Screen name="TopUpAmount" component={TopUpAmount} />


                   
                     <MyStack.Screen name="MainScreen" component={MainScreen} />
            <MyStack.Screen name="Accordion" component={Accordion} />
            <MyStack.Screen name="Investor" component={Investor} />
            <MyStack.Screen name="Investorone" component={Investorone} />
            <MyStack.Screen name="risk" component={Risk} />
            <MyStack.Screen name="Risktwo" component={Risktwo} />
            <MyStack.Screen name="ChangeMpinOne" component={ChangeMpinOne} />
            <MyStack.Screen name="Mpinthree" component={ChangeMpinThree} />
            <MyStack.Screen name="ChangeMpinFour" component={ChangeMpinFour} />
            <MyStack.Screen name="Cpone" component={ChangePasswordOne} />
            <MyStack.Screen name="ChangePasswordFour" component={ChangePasswordFour} />
            <MyStack.Screen name="Cpfive" component={ChangePasswordFive} />
            <MyStack.Screen name="Foliolist" component={Foliolist} />
            <MyStack.Screen name="SecuritySetting" component={SecuritySetting} />
            <MyStack.Screen name="MobileThree" component={MobileThree} />
            <MyStack.Screen name="MobileFour" component={MobileFour} />
            <MyStack.Screen name="setFace" component={SetFace} />
            <MyStack.Screen name="aboutUs" component={AboutUs} />
            <MyStack.Screen name="poll" component={Poll} />
            <MyStack.Screen name="pollTwo" component={PollTwo} />
            <MyStack.Screen name="serveyOne" component={ServeyOne} />
            <MyStack.Screen name="serveyTwo" component={ServeyTwo} />
            {/* <MyStack.Screen name="serveyThree" component={ServeyThree} /> */}
            <MyStack.Screen name="changeEmail" component={ChangeEmail}/>
            <MyStack.Screen name="verifyMobile" component={Verifymobile}/>
            <MyStack.Screen name="changemobileone" component={ChangeMobileOne}/>
            <MyStack.Screen name="RiskThree" component={RiskThree}/>
            <MyStack.Screen name="SurveyMain" component={SurveyMain}/>
            <MyStack.Screen name="HolidayPlannerOne" component={HolidayPlannerOne}/>
            <MyStack.Screen name="HolidayPlannerTwo" component={HolidayPlannerTwo}/>
            <MyStack.Screen name="HolidayPlannerThree" component={HolidayPlannerThree}/>
            <MyStack.Screen name="HolidayPlannerFour" component={HolidayPlannerFour}/>
            <MyStack.Screen name="HolidayPlannerFive" component={HolidayPlannerFive}/>
            <MyStack.Screen name="HolidayPlannerSix" component={HolidayPlannerSix}/>
            <MyStack.Screen name="NewInvestor" component={NewInvestor} />
            <MyStack.Screen name="MappedScheme" component={MappedScheme} />
            <MyStack.Screen name="MappedSchemeNext" component={MappedSchemeNext} />

            {/* abhishank  */}



            <MyStack.Screen name="SecondTime" component={SecondTime} />

          <MyStack.Screen name="Modify" component={Modiify} />


         

          

          <MyStack.Screen name="SecandTimeTwo" component={SecandTimeTwo} />

          


          


          <MyStack.Screen name="PaymentViaPhonePay" component={PaymentViaPhonePay} />


          <MyStack.Screen name="OTMcreatedThree" component={OTMcreatedThree} />

          <MyStack.Screen name="OTMcreatedTwo" component={OTMcreatedTwo} />

          <MyStack.Screen name="OTMcreatedOne" component={OTMcreatedOne} />

          <MyStack.Screen name="OneTimeCardOne" component={OneTimeCardOne} />

          
           {/* <MyStack.Screen name="CheckOut" component={CheckOut} /> */}
         
          
                   <MyStack.Screen name="FirstTime" component={FirstTime} />

          <MyStack.Screen name="Biller" component={Biller} />
          
            <MyStack.Screen name="Payment" component={Payment} />  

            <MyStack.Screen name="BankPortal" component={BankPortal} /> 
            <MyStack.Screen name="PaymentOne" component={PaymentOne} />  


            <MyStack.Screen name="SelectFolio" component={SelectFolio} />


          <MyStack.Screen name="OptionOne" component={OptionOne} />


          <MyStack.Screen name="Custom" component={Custom} />



          <MyStack.Screen name="CheckOutOne" component={CheckOutOne} />

          <MyStack.Screen name="CheckOut" component={CheckOut} />


          <MyStack.Screen name="BillerRegistration" component={BillerRegistration} />
         
          
          <MyStack.Screen name="TopUpAmountOne" component={TopUpAmountOne} />
          
          





          <MyStack.Screen name="ThankyouOTM" component={ThankyouOTM} />

<MyStack.Screen name="ThankyouPageBiller" component={ThankyouPageBiller} />

<MyStack.Screen name="OneTime" component={OneTime} />

<MyStack.Screen name="SucessScreen" component={SucessScreen} />


<MyStack.Screen name="GoalSavedsuccesfully" component={GoalSavedsuccesfully} />



<MyStack.Screen name="NewOtm" component={NewOtm} />

<MyStack.Screen name="RedirectPage" component={RedirectPage} />
<MyStack.Screen name="AutopayMandate" component={AutopayMandate} />







          


          

            








          </React.Fragment>
        </MyStack.Navigator>
      </NavigationContainer>

      </PaperProvider>
      
    </SafeAreaProvider>

    {/* // <Mpinone /> 
    // <Mpinfour /> 
    // <Mpinthree />
    // <Mpinfivepopup visible={true} />
    // <Mpintwo visible={true} />
    // <Logoutpopup visible={true} />
    // <Abhishank /> */}
    
    {/* // <Cpone />
    // <Cpthree visible={true} />
    // <Cpfour />
    // <Cpfive />
    // <Cpsix visible={true} />
    // <Adblockone visible={true} />
    // <Adblocktwo visible={true} />
    // <Adblockthree visible={true} />
    // <Surveyone />
    // <Aboutus />
    // <Moreoption visible={true} />
    // <More visible={true} />
    // <MobileThree />
    // <MobileFive visible={true} />
    // <MobileTwo visible={true} />
    // <MobileFour />
    // <Riskthree /> */}

    
    </>
  );
};

export default App;

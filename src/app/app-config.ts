
export class AppConfig {
  Shop_Signature_Method = 'HMAC-SHA1';//no need change
  Shop_Nonce_Length = 32;//no need change
  Shop_Parameter_Seperator = ', ';//no need change

  Shop_Name = "";//no need set,will get from your website
  Shop_Version = "1.0";
  Shop_Language = 'es';//change to your laguage,please check the document to learn how to translate.
  Shop_URL = "https://avicult-kiatoski.c9users.io";//set your website url,eg:"http://www.yousite.com"
  Shop_ConsumerKey = "ck_9a4b429418121817e633ba6d51b0977c2940cacf";//woocommerce rest api ConsumerKey
  Shop_ConsumerSecret = "cs_613d03e1e47dee6dd98c7df36bd132cc624b9940";//woocommerce rest api ConsumerSecret
  Shop_Currency = "EUR";//no need setting,will get from your Website
  Shop_Currency_format = "&euro;";//no need setting,will get from your Website


  //your shipping method,you need set these method with our plugin
  Shop_Shipping = [];

  App_Secret = "9d7af31324d77590474d3d5838b0784e12500f1b2d28c1253a9c51ccf20e4796";//install our plugin then Generate Secret key in basic setting
  Show_Home_Slide = true;//whether show home slide

  //Paypal setting
  //PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  //if you want to test payment,set Environments to PayPalEnvironmentSandbox,otherwise set to PayPalEnvironmentProduction
  Paypal_Environments = "PayPalEnvironmentSandbox";
  PayPal_EnvironmentProduction = "";
  PayPal_EnvironmentSandbox = "AZk-lmSv2i6XLUE_CDKjCSsMWK_ZcOv_K7MJtQjlYPuKfETqzDPDZY5DEeHHfOZ9mQ-CmSoenH11Ukc6";

  //Stripe payment setting
  Enable_Stripe = true;//Enable or disable stripe
  Stripe_Live_Secret_Key = "";//Live mode Secret Key
  Stripe_Live_Publishable_Key = "";//Live mode Publishable Key

  Enable_Stripe_Test_Mode = true;//Enable or disable test mode
  Stripe_Test_Secret_Key = "sk_test_yLkXMlZaeazOJK8AGQLPvepi";//Test mode Secret Key
  Stripe_Test_Publishable_Key = "pk_test_W2IM34bjEBH8AwhETLTFIXtd";//Test mode Publishable Key

  //Onesignal setting
  //Please check our online document set these
  Onesignal_Enable = false;//enable/disable Onesignal
  OneSignal_AppID = "";
  GCM_SenderID = "";

  //enable login with password,need to add codes to woocommerce,please check readme file
  Eanble_Login_With_Password = true;

  //Contact page info
  Service_In_Weekdays = "Monday-Friday (9am - 4pm)";
  Service_Weekend = "Saturday-Sunday (12pm - 4pm)";
  Service_Tel = "081123456";

  //Faq page info
  //Title:question Title
  //content:the answser
  Question_Array = [
    {
      'Title': 'Dicit debitis at sed?',
      Content: `Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet
          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas.` },
    {
      'Title': 'Dicit debitis at sed?',
      Content: `Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet
          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas.` },
    {
      'Title': 'Dicit debitis at sed?',
      Content: `Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet
          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas.` },
  ];

  //About page info
  Introduction = `Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet soluta
    quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas.`;
  Address1 = "123 N Harbor Dr. Redondo Beach, CA";
  Address2 = "United States 123456";
  CopyRight = "@Ionic2WooShop";

  //logo in app not app icon
  Logo_Image = "assets/img/logo.png";//copy your own image to assets/img/yourlogo.png and set logo.png to yourlogo.png.

  constructor() {
  }
}

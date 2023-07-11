import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonText,
} from "@ionic/react";
import {
  callOutline,
  clipboardOutline,
  eyeOffOutline,
  eyeOutline,
  lockOpenOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import stylesCommon from "./styles/common.module.css";
import { useHistory } from "react-router";

const SignUp = () => {
  const history = useHistory();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confpass, setConfpass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [allowBtn, setAllowBtn] = useState(false);

  useEffect(() => {
    if (password === confpass && password.length != 0 && phone.length == 18)
      return setAllowBtn(true);
    setAllowBtn(false);
  }, [phone, password, confpass]);

  return (
    <IonPage>
      <IonContent className="ion-padding no-scroll">
        <IonText className={stylesCommon.title}>Sign up</IonText>
        <IonItem>
          <IonIcon className="ion-padding" icon={callOutline} />
          <IonInput
            onIonInput={(e) => setPhone(e.target.value?.toString() || "")}
            type="text"
            placeholder="Phone"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon className="ion-padding" icon={lockOpenOutline} />
          <IonInput
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onIonInput={(e) => setPassword(e.target.value?.toString() || "")}
          ></IonInput>
          <IonIcon
            onClick={() => setShowPass((k) => !k)}
            className="ion-padding"
            icon={showPass ? eyeOutline : eyeOffOutline}
          />
        </IonItem>
        <IonItem>
          <IonIcon className="ion-padding" icon={clipboardOutline} />
          <IonInput
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            onIonInput={(e) => setConfpass(e.target.value?.toString() || "")}
          ></IonInput>
          <IonIcon
            className="ion-padding"
            onClick={() => setShowPass((k) => !k)}
            icon={showPass ? eyeOutline : eyeOffOutline}
          />
        </IonItem>
        <div className={stylesCommon.bottom_fixed_wrap}>
          <IonButton disabled={!allowBtn} expand={"block"}>
            Continue
          </IonButton>

          <IonText className={stylesCommon.bottom_text}>
            Have an account?
            <IonText onClick={() => history.push("/login")} color={"primary"}>
              Login
            </IonText>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

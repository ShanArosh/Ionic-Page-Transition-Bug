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
  eyeOffOutline,
  eyeOutline,
  lockOpenOutline,
} from "ionicons/icons";
import stylesCommon from "./styles/common.module.css";
import { useHistory } from "react-router";
import { useState } from "react";

const LogIn = () => {
  const history = useHistory();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding no-scroll">
        <IonText className={stylesCommon.title}>Login</IonText>
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
            className="ion-padding"
            icon={showPass ? eyeOutline : eyeOffOutline}
            onClick={() => setShowPass((k) => !k)}
          />
        </IonItem>
        <IonText className={stylesCommon.forget_pass_text} color={"primary"}>
          Forgot Password?
        </IonText>

        <div className={stylesCommon.bottom_fixed_wrap}>
          <IonButton type="submit" expand={"block"}>
            Login
          </IonButton>

          <IonText className={stylesCommon.bottom_text}>
            New to app?
            <IonText onClick={() => history.push("/signup")} color={"primary"}>
              Register
            </IonText>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;

//const VPNConnectionStateReason= {
//}
        //0: "NM_VPN_CONNECTION_STATE_REASON_UNKNOWN",
        //1: "NM_VPN_CONNECTION_STATE_REASON_NONE",
        //2: ="NM_VPN_CONNECTION_STATE_REASON_USER_DISCONNECTED",
        //3: "NM_VPN_CONNECTION_STATE_REASON_DEVICE_DISCONNECTED",
      //<member name="service_stopped" value="4">
        //4: "NM_VPN_CONNECTION_STATE_REASON_SERVICE_STOPPED",
      //<member name="ip_config_invalid" value="5">
        //5: "NM_VPN_CONNECTION_STATE_REASON_IP_CONFIG_INVALID",
      //<member name="connect_timeout" value="6">
        //6: "NM_VPN_CONNECTION_STATE_REASON_CONNECT_TIMEOUT",
      //<member name="service_start_timeout" value="7">
        //7: "NM_VPN_CONNECTION_STATE_REASON_SERVICE_START_TIMEOUT",
      //<member name="service_start_failed" value="8">
        //8: "NM_VPN_CONNECTION_STATE_REASON_SERVICE_START_FAILED",
      //<member name="no_secrets" value="9">
        //9: "NM_VPN_CONNECTION_STATE_REASON_NO_SECRETS",
      //</member>
      //<member name="login_failed" value="10">
        //<attribute name="c:identifier" value="NM_VPN_CONNECTION_STATE_REASON_LOGIN_FAILED"/>
      //</member>
      //<member name="connection_removed" value="11">
        //<attribute name="c:identifier" value="NM_VPN_CONNECTION_STATE_REASON_CONNECTION_REMOVED"/>
      //</member>
    //</enumeration>

const NetworkManager = imports.gi.NetworkManager;

const VPNConnectionStateReason = {};
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.UNKNOWN] = ' unknown';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.NONE] = ' none';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.USER_DISCONNECTED] = ' user_disconnected';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.DEVICE_DISCONNECTED] = ' device_disconnected';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.SERVICE_STOPPED] = ' service_stopped';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.IP_CONFIG_INVALID] = ' ip_config_invalid';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.CONNECT_TIMEOUT] = ' connect_timeout';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.SERVICE_START_TIMEOUT] = ' service_start_timeout';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.SERVICE_START_FAILED] = ' service_start_failed';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.NO_SECRETS] = ' no_secrets';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.LOGIN_FAILED] = ' authentication unsuccessful';
VPNConnectionStateReason[NetworkManager.VPNConnectionStateReason.CONNECTION_REMOVED] = ' connection_removed';

function reasonToText(reason) {
    for (let i in NetworkManager.VPNConnectionStateReason) {
        if (NetworkManager.VPNConnectionStateReason[i] === reason)
            return i;
    }

    return reason;
}

let reason = 10;
let text = reasonToText(reason);

let reg = new RegExp('^\d+$');

//print(reg.test(text) ? reason : text);
print(RegExp('^\d+$').test(text) ? reason : text);
print(VPNConnectionStateReason[reason]);

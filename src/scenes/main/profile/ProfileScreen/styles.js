import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { hScaleRatio, wScale } from "../../../../utils/scailing";
import fonts from "../../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  logout: {
    marginLeft: wScale(258),
    marginTop: hScaleRatio(52)
  },
  contentContainer: {
    alignItems: 'center'
  },
  avatar: {
    marginTop: hScaleRatio(30),
    position: 'relative',
  },
  setting: {
    position: 'absolute',
    top: '25%',
    left: 105,
  },
  uid: {
    fontFamily: fonts.notoSansSemiBold,
    fontSize: 12,
    color: colors.white,
    marginTop: hScaleRatio(21),
    textAlign: 'center',
  },
  name: {
    fontFamily: fonts.notoSansSemiBold,
    fontSize: 20,
    color: colors.white,
    marginTop: hScaleRatio(7),
    textAlign: 'center',
  },
  coinPanel: {
    marginTop: hScaleRatio(22)
  },
  energyPanel: {
    marginTop: hScaleRatio(22),
    justifyContent: 'space-between'
  },
  history: {
    marginTop: hScaleRatio(30),
    fontFamily: fonts.notoSansBold,
    fontSize: 14,
    fontWeight: "900",
    color: colors.white,
    width: wScale(295)
  },
  historyItem: {
    marginTop: hScaleRatio(24),
  },
  infoButton: {
    marginTop: hScaleRatio(22),
    marginBottom: hScaleRatio(3)
  }
});

export default styles;

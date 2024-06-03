import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import dimensions from "../../../../theme/dimensions";
import { hScaleRatio, wScale } from "../../../../utils/scailing";
import fonts from "../../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: dimensions.paddingHPrimary
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimensions.paddingTop
  },
  title: {
    marginLeft: wScale(16),
    fontFamily: fonts.notoSansSemiBold,
    fontWeight: '700',
    fontSize: 30,
    color: colors.white
  },
  energy: {
    alignSelf: 'center',
    marginTop: hScaleRatio(20)
  },
  androidCard: {
    marginTop: hScaleRatio(70),
    alignSelf: 'center'
  }
});

export default styles;

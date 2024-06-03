import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { hScaleRatio, width } from "../../../../utils/scailing";
import dimensions from "../../../../theme/dimensions";
import fonts from "../../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: dimensions.paddingHSecondary
  },
  appbarContainer: {
    flexDirection: 'row',
    marginTop: dimensions.paddingTop,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coverContainer: {
    width: width - 104,
    height: width - 104,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  coverGradient: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  name: {
    fontFamily: fonts.notoSansSemiBold,
    fontWeight: '700',
    fontSize: 20,
    color: colors.white,
    position: 'absolute',
    bottom: 12,
    left: 12
  },
  share: {
    position: 'absolute',
    top: 12,
    right: 12
  },
  play: {
    marginTop: hScaleRatio(20),
  },
  description: {
    marginTop: hScaleRatio(20),
    color: colors.white,
    fontSize: 14
  },
  sponsor: {
    marginVertical: hScaleRatio(25),
  },
  rule: {
    marginTop: hScaleRatio(20),
    fontFamily: fonts.notoSansBold,
    fontWeight: '900',
    fontSize: 14,
    color: colors.white,
  }
});

export default styles;

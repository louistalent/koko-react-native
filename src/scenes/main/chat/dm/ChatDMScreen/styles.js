import { StyleSheet } from "react-native";
import colors from "../../../../../theme/colors";
import { hScaleRatio } from "../../../../../utils/scailing";
import dimensions from "../../../../../theme/dimensions";
import fonts from "../../../../../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  titleBar: {
    height: hScaleRatio(40),
    marginHorizontal: dimensions.paddingHPrimary,
    marginVertical: hScaleRatio(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  back: {
    position: "absolute",
    left: 0,
    top: 0
  },
  more: {
    position: "absolute",
    right: 0,
    top: 0
  },
  title: {
    fontFamily: fonts.notoSansRegular,
    fontWeight: '700',
    fontSize: 15,
    color: colors.white
  },
  messageList: {
    marginHorizontal: dimensions.paddingHPrimary,
    marginBottom: hScaleRatio(15)
  },
  messageItem: {

  },
  messageSeparator: {
    height: hScaleRatio(20)
  }
});

export default styles;

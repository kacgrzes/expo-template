import { fontFamily } from "@mobile/unistyles/fontFamily";

export const textVariants = {
  body1: {
    fontSize: 16,
    lineHeight: 1.5 * 16,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexSans_400Regular,
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.5 * 14,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexSans_400Regular,
  },
  body3: {
    fontSize: 12,
    lineHeight: 1.5 * 12,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexSans_400Regular,
  },
  body4: {
    fontSize: 10,
    lineHeight: 1.5 * 10,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexSans_400Regular,
  },
  label1: {
    fontSize: 16,
    lineHeight: 1.5 * 16,
    fontWeight: "500",
    fontFamily: fontFamily.IBMPlexSans_500Medium,
  },
  label2: {
    fontSize: 14,
    lineHeight: 1.5 * 14,
    fontWeight: "500",
    fontFamily: fontFamily.IBMPlexSans_500Medium,
  },
  label3: {
    fontSize: 12,
    lineHeight: 1.5 * 12,
    fontWeight: "500",
    fontFamily: fontFamily.IBMPlexSans_500Medium,
  },
  code1: {
    fontSize: 16,
    lineHeight: 1.5 * 16,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexMono_400Regular,
  },
  code2: {
    fontSize: 14,
    lineHeight: 1.5 * 14,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexMono_400Regular,
  },
  code3: {
    fontSize: 12,
    lineHeight: 1.5 * 12,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexMono_400Regular,
  },
  code4: {
    fontSize: 10,
    lineHeight: 1.5 * 10,
    fontWeight: "400",
    fontFamily: fontFamily.IBMPlexMono_400Regular,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: fontFamily.IBMPlexSerif_600SemiBold,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 1.5 * 12,
    fontWeight: "600",
    fontFamily: fontFamily.IBMPlexSans_600SemiBold,
  },
  caption2: {
    fontSize: 10,
    lineHeight: 1.5 * 10,
    fontWeight: "600",
    fontFamily: fontFamily.IBMPlexSans_600SemiBold,
  },
} as const;

export const razorpayConfig = {
  keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
  keySecret: process.env.RAZORPAY_KEY_SECRET ?? "",
  platformFeePercent: Number(process.env.NEXT_PUBLIC_PLATFORM_FEE_PERCENT ?? 8)
};

export const settlementPolicy = {
  cycle: "T+1 / T+2",
  automaticSettlement: true,
  walletEnabled: false
};

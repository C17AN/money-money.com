import React, { useEffect } from "react";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      new TradingView.widget({
        width: "100%",
        height: "360px",
        range: "12M",
        symbol: "SPY",
        interval: "D",
        timezone: "Asia/Seoul",
        theme: "light",
        style: "1",
        locale: "kr",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "chart-wrapper",
        calendar: true,
        details: true,
        save_image: false,
      });
    }, 100);
  }, []);

  return (
    <div className="flex-1">
      <Head>
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js" async></script>
      </Head>
      <div id="chart-wrapper" />
    </div>
  );
};

export default Index;

function payscaleAnalyzer(payList) {
  return Math.max.apply(null, payList) - Math.min.apply(null, payList) ;
    }

---
title: why redux
---

# 為什麼需要 Redux ?

- 當狀態變複雜後 redux 可以更好管理狀態和元件的關係

- 易追蹤是哪個 component dispatch action 修改 state, 讓 debug 更容易

- 解決部分 context 效能( performance )不佳的問題

## Redux 和 React Component 之間的關係

- redux 有自己的 state
- 透過 React component (trigger)發 dispatch action 出去給 Reducer 執行, 更新 store 的 state

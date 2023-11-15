"use client";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./component/Dashboard";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

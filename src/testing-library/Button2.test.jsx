import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/react';
import Button2 from "./Button2";

test("test whether the event listner handles clicking ",()=>{
    console.log = jest.fn();
    render(<Button2/>)
    const buttonEl = screen.getByText("Submit");
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveBeenCalledWith("I got clicked")
})
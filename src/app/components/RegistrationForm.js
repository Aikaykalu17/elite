"use client";
import SpinnerMini from "./SpinnerMini";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, CheckCircle } from "lucide-react";
import { useState } from "react";
import faqs from "@/data/faqs";
import FaqList from "./FaqList";
import Reveal from "./Reveal";

function RegistrationForm() {
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("idle");
  const [state, setState] = useState("");

  const isDisabled = status === "success";

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }

  const positions = [
    { value: "GK", label: "Goal Keeper" },
    { value: "Defender/CB", label: "Defender (CB)" },
    { value: "Defender/RB", label: "Defender (RB)" },
    { value: "Defender/LB", label: "Defender (LB)" },
    { value: "Midfielder/DMF", label: "Midfielder (DMF)" },
    { value: "Midfielder/AMF", label: "Midfielder (AMF)" },
    { value: "Midfielder/CMF", label: "Midfielder (CMF)" },
    { value: "Winger/RW", label: "Winger (RW)" },
    { value: "Winger/LW", label: "Winger (LW)" },
    { value: "Sriker/SS", label: "Striker (SS)" },
    { value: "Striker/CF", label: "Striker (CF)" },
  ];
  const nigeriaStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT (Abuja)",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("sending");
    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get("fullName"),
      dob: formData.get("dob"),
      position: formData.get("position"),
      phoneNumber: formData.get("phoneNumber"),
      state: formData.get("state"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log(data);
    const age = calculateAge(data.dob);

    if (age < 6 || age > 25) {
      setStatus("ageInvalid");
      e.target.reset();
      setPosition("");
      return;
    }
    console.log(data);
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setStatus("success");
      e.target.reset();
      setPosition("");
      setState("");

      setTimeout(() => {
        setStatus("idle");
      }, 8000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }
  return (
    <div className="w-full bg-white ">
      <div className="py-8 flex flex-col gap-6  items-start rounded-l-sm rounded-r-sm w-[90%] mx-auto  md:flex md:flex-row landscape:grid landscape:grid-cols-2">
        <Reveal>
          <form
            aria-labelledby="form-title"
            className="flex flex-col gap-4 pb-4 flex-1"
            onSubmit={handleSubmit}
          >
            <h2
              id="form-title"
              className="text-[#061426] text-center font-extrabold text-lg"
            >
              Trial Application Form
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-xs flex flex-col gap-0.5">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="border border-slate-400 rounded py-2 px-4 text-xs"
                  disabled={isDisabled}
                />
              </div>

              <div className="text-xs flex flex-col gap-0.5">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="border border-slate-400 rounded py-2 px-4 text-xs"
                  disabled={isDisabled}
                />
              </div>
            </div>
            <div className="text-xs flex flex-col gap-0.5">
              <label htmlFor="position">Select Position</label>
              <Select.Root
                value={position}
                onValueChange={setPosition}
                name="position"
                disabled={isDisabled}
              >
                <Select.Trigger
                  id="position"
                  className="flex items-center justify-between border border-slate-400 rounded py-2 px-4 text-xs bg-white"
                  disabled={isDisabled}
                >
                  <Select.Value placeholder="Select position" />
                  <Select.Icon>
                    <ChevronDown size={14} />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content
                    position="popper"
                    side="bottom"
                    sideOffset={4}
                    className="bg-white border border-slate-300 rounded shadow-md text-xs overflow-hidden z-50 max-h-60"
                  >
                    <Select.Viewport className="p-1">
                      {positions.map((pos) => (
                        <Select.Item
                          key={pos.value}
                          value={pos.value}
                          className="flex items-center justify-between px-3 py-2 rounded cursor-pointer outline-none data-highlighted:bg-[#F5B800] data-highlighted:text-[#061426]"
                        >
                          <Select.ItemText>{pos.label}</Select.ItemText>
                          <Select.ItemIndicator>
                            <Check size={14} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            <div className="text-xs flex flex-col gap-0.5">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="border border-slate-400 rounded py-2 px-4 text-xs w-full"
                disabled={isDisabled}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-xs flex flex-col gap-0.5">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="border border-slate-400 rounded py-2 px-4 text-xs"
                  disabled={isDisabled}
                />
              </div>
              <div className="text-xs flex flex-col gap-0.5">
                <label htmlFor="state">State</label>
                <Select.Root
                  value={state}
                  onValueChange={setState}
                  name="state"
                  disabled={isDisabled}
                >
                  <Select.Trigger
                    id="state"
                    className="flex items-center justify-between border border-slate-400 rounded py-2 px-4 text-xs bg-white"
                    disabled={isDisabled}
                  >
                    <Select.Value placeholder="Select state" />
                    <Select.Icon>
                      <ChevronDown size={14} />
                    </Select.Icon>
                  </Select.Trigger>

                  <Select.Portal>
                    <Select.Content
                      position="popper"
                      side="bottom"
                      sideOffset={4}
                      className="bg-white border border-slate-300 rounded shadow-md text-xs overflow-hidden z-50 max-h-60"
                    >
                      <Select.Viewport className="p-1">
                        {nigeriaStates.map((s) => (
                          <Select.Item
                            key={s}
                            value={s}
                            className="flex items-center justify-between px-3 py-2 rounded cursor-pointer outline-none data-highlighted:bg-[#F5B800] data-highlighted:text-[#061426]"
                          >
                            <Select.ItemText>{s}</Select.ItemText>
                            <Select.ItemIndicator>
                              <Check size={14} />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </div>
            <div className="text-xs flex flex-col gap-0.5">
              <label htmlFor="message">Tell Us About Yourself (Optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Preferred foot, height, weight, years of experience, previous club or academy (if any), alternative positions you can play, and anything else we should know."
                className="border border-slate-400 rounded py-2 px-4 text-xs w-full h-32 resize-none overflow-y-auto"
                disabled={isDisabled}
              />
            </div>
            <button
              type="submit"
              disabled={isDisabled || status === "sending"}
              className="bg-[#F5B800] text-xs text-black font-semibold py-4 px-20 rounded-md self-center disabled:opacity-50 flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:translate-y-1 cursor-pointer hover:bg-transparent border border-[#F5B800]"
            >
              {status === "sending" && <SpinnerMini />}
              {status === "success" && (
                <CheckCircle
                  size={30}
                  color="#059669"
                  className="animate-bounce"
                />
              )}
              {status !== "sending" &&
                status !== "success" &&
                "SUBMIT APPLICATION"}
            </button>
            <div aria-live="polite">
              {status === "success" && (
                <p role="status" className="text-green-600 text-xs text-center">
                  Application received! We&apos;ll reach out via the email you
                  provided if you&apos;re selected for a trial. Please avoid
                  submitting multiple applications — duplicate entries may lead
                  to automatic disqualification.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-red-600 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}
              {status === "ageInvalid" && (
                <p role="alert" className="text-red-600 text-xs text-center">
                  Applicants must be between 6 and 25 years old.
                </p>
              )}
            </div>
          </form>
        </Reveal>
        {/* <div className="h-full w-px bg-gray-500 hidden md:block"></div> */}

        <div className="flex flex-col w-full gap-8 md:flex-1">
          <Reveal>
            <div className=" flex flex-col items-start gap-2">
              <h2 className="font-extrabold">Requirements</h2>
              <ul className="flex flex-col gap-2 list-none">
                <li className="flex items-center gap-2 text-xs">
                  <Check size={14} className="text-green-600" />
                  Age 7 and 25 years old
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Check size={14} className="text-green-600" />
                  Birth Certificate
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Check size={14} className="text-green-600" />
                  Training Kit & Boots
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Check size={14} className="text-green-600" />
                  Water Bottle
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Check size={14} className="text-green-600" />
                  Medical Fitness Certificate
                </li>
              </ul>
            </div>
          </Reveal>

          <dl className="flex flex-col gap-2 md:w-max">
            <h2 className="text-[#061426] font-extrabold">Trial Fees</h2>
            <p className="text-xs text-gray-500">Fees vary by age category</p>
            <div className="flex justify-between text-xs">
              <dt>U-13</dt>
              <dd className="text-[#061426] font-extrabold">₦60,000</dd>
            </div>
            <div className="flex justify-between text-xs">
              <dt>U-15</dt>
              <dd className="text-[#061426] font-extrabold">₦70,000</dd>
            </div>
            <div className="flex justify-between text-xs">
              <dt>U-17</dt>
              <dd className="text-[#061426] font-extrabold">₦100,000</dd>
            </div>
            <div className="flex justify-between text-xs">
              <dt>Senior</dt>
              <dd className="text-[#061426] font-extrabold">₦150,000</dd>
            </div>
          </dl>

          <Reveal>
            <div className="flex flex-col gap-4">
              <h2 className="text-[#061426] font-extrabold">FAQS</h2>
              <FaqList faqs={faqs} />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

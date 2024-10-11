import { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import logo from './assets/img/esat-mock-logo.png';
import registration from './assets/img/registration.png';
import arrow from './assets/img/arrow.png';
import regArrow from './assets/img/reg-arrow.png';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    nationality: 'Philippines',
    address: {
      region: '',
      province: '',
      municipality: '',
      barangay: '',
      street: ''
    },
  });

  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getRegions();
  }, []);

  useEffect(() => {
    getProvinces();
  }, [user.address.region]);

  const getRegions = () => {
    axios
      .get("https://psgc.gitlab.io/api/regions")
      .then((item) => {
        setRegions(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProvinces = () => {
    axios
      .get(`https://psgc.gitlab.io/api/regions/${user.address.region}/provinces`)
      .then((item) => {
        setProvinces(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === 'region' || name === 'province' || name === 'municipality' || name === 'barangay' || name === 'street') {
      setUser({ ...user, address: { ...user.address, [name]: value } });
      return;
    }

    setUser({ ...user, [name]: value });
  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    console.log(user)
  }

  return (
    <div className="mx-auto max-w-[516px] shadow my-6 rounded-2xl bg-white">
      <div className="flex">
        <div className="w-[156px]">
          <img src={registration} alt="registration" className="object-cover w-full" />
        </div>
        <div className="flex-1">
          <div className="border-b">
            <img src={logo} alt="esat-mock-logo" className="object-cover h-[150px] w-[267.65px] mx-auto" />
          </div>
          <div className="py-4 px-8">
            <h1 className="text-center font-semibold text-[#403D39] mb-4">Happy Play Registration</h1>
            <form className="space-y-4" onSubmit={handelSubmit}>
              <div>
                <label htmlFor="firstname" className="font-normal">First Name</label>
                <input id="firstname" name="firstname" value={user.firstname} onChange={handelInput} type="text" className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8]" placeholder="First Name" required />
              </div>
              <div>
                <label htmlFor="lastname" className="font-normal">Last Name</label>
                <input id="lastname" name="lastname" value={user.lastname} onChange={handelInput} type="text" className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8]" placeholder="Last Name" required />
              </div>
              <div>
                <label htmlFor="birthday" className="font-normal">Birthday</label>
                <input id="birthday" name="birthday" value={user.birthday} onChange={handelInput} type="date" className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8]" placeholder="Birthday" required />
              </div>
              <div>
                <label htmlFor="nationality" className="font-normal">Nationality</label>
                <select id="nationality" name="nationality" value={user.nationality} onChange={handelInput} className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8] bg-white" required>
                  <option>Philippines</option>
                </select>
              </div>
              <details>
                <summary role="button" className="flex items-center justify-between">
                  <span>Current Address</span>
                  <img src={arrow} alt="arrow" />
                </summary>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="region" className="font-normal">Region</label>
                      <select id="region" name="region" value={user.address.region} onChange={handelInput} className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8] bg-white">
                        <option value="">Select Region</option>
                        {regions.map((region, index) => (
                          <option key={index} value={region.code}>{region.name}</option>
                        ))}
                      </select></div>
                    <div>
                      <label htmlFor="province" className="font-normal">Province</label>
                      <select id="province" name="province" value={user.address.province} onChange={handelInput} className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8] bg-white">
                        <option value="">Select Province</option>
                        {provinces.map((province, index) => (
                          <option key={index} value={province.code}>{province.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="municipality" className="font-normal">Municipality</label>
                      <select id="municipality" name="municipality" value={user.address.municipality} onChange={handelInput} className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8] bg-white">
                        <option>Philippines</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="barangay" className="font-normal">Barangay</label>
                      <select id="barangay" name="barangay" value={user.address.barangay} onChange={handelInput} className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8] bg-white">
                        <option>Philippines</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="street" className="font-normal">Street/Sitio</label>
                    <input id="street" name="street" value={user.address.street} onChange={handelInput} type="text" className="mt-1 w-full rounded-2xl border border-[#4845D2] py-2 px-4 focus:outline-none focus:border-[#1D4ED8]" placeholder="Street/Sitio" />
                  </div>
                </div>
              </details>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <label className="text-sm">
                  <span>I agree to Happy Play </span>
                  <span className="text-[#4845D2]">Privacy Policy and Terms of Use</span>
                </label>
              </div>
              <button type="submit" className="w-full bg-[#4845D2] text-white py-2 rounded-lg font-bold">
                <span>Register</span>
                <img src={regArrow} alt="reg-arrow" className="inline-block ml-2" />
              </button>
            </form>
            <div className="flex items-center justify-center gap-4 mt-6 text-[#CCC5B9]">
              <span>Terms Of Use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

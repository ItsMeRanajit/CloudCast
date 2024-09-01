import { IoSunnyOutline } from "react-icons/io5";
import { CiCloudSun } from "react-icons/ci";
import { IoRainyOutline } from "react-icons/io5";
import { CiCloudDrizzle } from "react-icons/ci";
import { RiThunderstormsLine } from "react-icons/ri";
import { FaRegSnowflake } from "react-icons/fa";
import { RiMistLine } from "react-icons/ri";
import { BsCloudHaze } from "react-icons/bs";
import { LuCloudFog } from "react-icons/lu";
import { WiSmoke } from "react-icons/wi";
import { WiDust } from "react-icons/wi";
import { WiSandstorm } from "react-icons/wi";
import { GiDustCloud } from "react-icons/gi";
import { FaWind } from "react-icons/fa";
import { GiTornado } from "react-icons/gi";

// Correct way: Store component references, not JSX
export const iconMapping = {
  Clear: IoSunnyOutline,
  Clouds: CiCloudSun,
  Rain: IoRainyOutline,
  Drizzle: CiCloudDrizzle,
  Thunderstorm: RiThunderstormsLine,
  Snow: FaRegSnowflake,
  Mist: RiMistLine,
  Haze: BsCloudHaze,
  Fog: LuCloudFog,
  Smoke: WiSmoke,
  Dust: WiDust,
  Sand: WiSandstorm,
  Ash: GiDustCloud,
  Squall: FaWind,
  Tornado: GiTornado,
};
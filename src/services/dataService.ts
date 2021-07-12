import axios from "axios";
import * as data from "../assets/data/profile.json"
import { delayPromise } from "../common/helper";

// data service
export default class DataService {
  static async loadProfile() {
    return delayPromise(data, 0)
  }
}

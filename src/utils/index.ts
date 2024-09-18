import { HttpService } from "@/services";
const http = new HttpService();

export const camelCase = (str: any) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const fetchData = async($url: any) => {
  const response:any = await http.get($url);
  return response;
}  
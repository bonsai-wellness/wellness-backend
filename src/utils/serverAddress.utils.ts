import os from "os";

export function serverAddress(): string {
  const ifaces = os.networkInterfaces();
  let ipAddress: string | undefined = undefined;

  for (const interfaces of Object.values(ifaces)) {
    for (const iface of interfaces!) {
      if (iface.family === "IPv4" && iface.internal === false) {
        ipAddress = iface.address;
        break;
      }
    }
    if (ipAddress) {
      break;
    }
  }

  if (ipAddress === undefined) {
    return "";
  }

  return "http://" + ipAddress + ":" + process.env.PORT + "/";
}

import { customUrls } from "./urls/custom-urls"
import { reFiterUrls } from "./urls/re-fiter-urls"

const urls: RegExp[] = [...reFiterUrls, ...customUrls]

const PROXY = "SOCKS5 127.0.0.1:1086;" // Default MacOS ss-local SOCKS5 address
const DIRECT = "DIRECT;"

function FindProxyForURL(url: string, host: string) {
  if (urls.every((reg) => url.match(reg) === null)) {
    return DIRECT
  }
  return PROXY
}

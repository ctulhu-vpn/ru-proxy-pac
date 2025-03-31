import { customUrls } from "./urls/custom-urls"
import { reFiterUrls } from "./urls/re-fiter-urls"

const urls: RegExp[] = [...reFiterUrls, ...customUrls]

const PROXY = "SOCKS5 127.0.0.1:1086;" // Default MacOS ss-local SOCKS5 address
const DIRECT = "DIRECT;"

function FindProxyForURL(url: string, host: string) {
  if (
    urls.every((reg) => {
      const urlMatch = url.match(reg)
      const isNotMatch = urlMatch === null
      if (!isNotMatch) console.log(urlMatch)
      return isNotMatch
    })
  ) {
    return DIRECT
  }
  return PROXY
}

export { FindProxyForURL }

# Shadowsocks PAC for Russia

Proxy Auto-Configuration (PAC) file use with Shadowsocks to bypass internet censorship and provide efficient routing in Russia.

## Structure

The repository contains two branches:

- **build**: Contains the latest version of the `proxy.pac` file that is ready for use.
- **main**: Contains the source code and configuration files for building the `proxy.pac` file.

## Usage

### 1. Get the PAC file

To use the proxy configuration, simply [copy raw URL or download the latest `proxy.pac` file from the `build` branch.](https://raw.githubusercontent.com/ctulhu-vpn/ru-proxy-pac/refs/heads/build/proxy.pac)

### 2. Configuring Shadowsocks

Once you have the PAC file, configure your Shadowsocks client to use it in settings.

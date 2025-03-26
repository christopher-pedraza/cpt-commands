# Basic Configuration Commands

This document covers the fundamental commands needed to set up a Cisco device in Packet Tracer.

Return to the [main page](README.md) for more topics.

## Entering Privileged and Configuration Modes

| Command | Description | Parameters |
|---------|------------|------------|
| `enable` | Enters privileged EXEC mode | None |
| `configure terminal` | Enters global configuration mode | None |

## Device Identity and Security

| Command | Description | Parameters |
|---------|------------|------------|
| `hostname <name>` | Sets the device hostname | `<name>`: Desired hostname |
| `service password-encryption` | Encrypts all passwords stored in the configuration file | None |
| `enable secret <password>` | Sets an encrypted privileged mode password | `<password>`: Password for privileged EXEC mode |
| `banner motd #<message>#` | Sets a Message of the Day (MOTD) banner | `<message>`: The message inside delimiters |

## Disabling Unnecessary Features

| Command | Description | Parameters |
|---------|------------|------------|
| `no ip domain-lookup` | Prevents the router from trying to resolve unknown commands as hostnames | None |

## Saving and Viewing Configurations

| Command | Description | Parameters |
|---------|------------|------------|
| `copy running-config startup-config` | Saves the current configuration to the startup file | None |
| `show running-config` | Displays the current running configuration | None |
| `show startup-config` | Displays the startup configuration stored in NVRAM | None |

## Interface Configuration

| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>` | Selects an interface to configure | `<interface>`: e.g., `FastEthernet0/0`, `GigabitEthernet0/1` |
| `ip address <IP> <subnet>` | Assigns an IP address to the interface | `<IP>`: IP address, `<subnet>`: Subnet mask |
| `no shutdown` | Enables the interface | None |
| `description <text>` | Adds a description to an interface | `<text>`: Description |
| `duplex <full/half/auto>` | Sets the duplex mode | `full`, `half`, `auto` |
| `speed <10/100/1000/auto>` | Sets the interface speed | `10`, `100`, `1000`, `auto` |

## Removing Configurations

| Command | Description | Parameters |
|---------|------------|------------|
| `erase startup-config` | Erases the startup configuration stored in NVRAM | None |
| `delete vlan.dat` | Deletes the VLAN database file | None |
| `reload` | Reboots the device to apply changes | None |
| `default interface <interface>` | Resets an interface to its default settings | `<interface>`: Interface to reset |
| `no hostname` | Removes the configured hostname, reverting to default | None |
| `no enable secret` | Removes the privileged EXEC mode password | None |
| `no banner motd` | Removes the configured Message of the Day banner | None |

## History Commands

| Command | Description | Parameters |
|---------|------------|------------|
| `show history` | Displays the command history | None |
| `terminal history size <size>` | Modifies the number of stored history commands | `<size>`: Number of commands to store |

## Show Command Filters

| Command | Description | Parameters |
|---------|------------|------------|
| `show running-config \| include <text>` | Displays only lines that contain `<text>` | `<text>`: Text to match |
| `show running-config \| exclude <text>` | Displays all lines except those containing `<text>` | `<text>`: Text to exclude |
| `show running-config \| begin <text>` | Displays output starting from the first occurrence of `<text>` | `<text>`: Text to begin from |
| `show running-config \| section <text>` | Displays the section that includes `<text>` | `<text>`: Section header or keyword |

## Basic Verification Commands

| Command | Description | Parameters |
|---------|------------|------------|
| `show ip interface brief` | Displays a summary of interfaces, IP addresses, and statuses | None |
| `show version` | Displays system version, uptime, and hardware details | None |
| `ping <IP>` | Sends ICMP packets to check connectivity | `<IP>`: Destination IP address |
| `traceroute <IP>` | Traces the route to a destination | `<IP>`: Destination IP address |

---

Return to the [main page](README.md) for more topics.

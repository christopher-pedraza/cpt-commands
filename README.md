# cpt-commands

- [Basic Configuration](basic_configuration.md)
    - [Entering Privileged and Configuration Modes](basic_configuration.md#entering-privileged-and-configuration-modes)
    - [Device Identity and Security](basic_configuration.md#device-identity-and-security)
    - [Disabling Unnecessary Features](basic_configuration.md#disabling-unnecessary-features)
    - [Saving and Viewing Configurations](basic_configuration.md#saving-and-viewing-configurations)
    - [Interface Configuration](basic_configuration.md#interface-configuration)
    - [Basic Verification Commands](basic_configuration.md#basic-verification-commands)

- [VLAN Configuration](vlan_configuration.md)
    - [Creating and Managing VLANs](vlan_configuration.md#creating-and-managing-vlans)
    - [Assigning VLANs to Interfaces](vlan_configuration.md#assigning-vlans-to-interfaces)
    - [Configuring Voice VLAN with QoS](vlan_configuration.md#configuring-voice-vlan-with-qos)
    - [Removing VLANs](vlan_configuration.md#removing-vlans)
    - [Configuring Trunk Ports](vlan_configuration.md#configuring-trunk-ports)
    - [Dynamic Trunking Protocol (DTP)](vlan_configuration.md#dynamic-trunking-protocol-dtp)
    - [DTP Mode Comparison Table](vlan_configuration.md#dtp-mode-comparison-table)
    - [VLAN Verification Commands](vlan_configuration.md#vlan-verification-commands)
    - [Inter-VLAN Routing (Router-on-a-Stick)](vlan_configuration.md#inter-vlan-routing-router-on-a-stick)
    - [Layer 3 Switching (Inter-VLAN Routing)](vlan_configuration.md#layer-3-switching-inter-vlan-routing)
    - [Configuring Routing on a Layer 3 Switch](vlan_configuration.md#configuring-routing-on-a-layer-3-switch)


---

### **Basic Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `enable` | Enters privileged EXEC mode | None |
| `configure terminal` | Enters global configuration mode | None |
| `hostname <name>` | Sets the device hostname | `<name>`: Desired hostname |
| `no ip domain-lookup` | Disables automatic DNS lookup to prevent delays | None |
| `service password-encryption` | Encrypts all passwords stored in the configuration file | None |
| `copy running-config startup-config` | Saves the current configuration to the startup file | None |

---

### **Interface Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>` | Selects an interface to configure | `<interface>`: e.g., `FastEthernet0/0`, `GigabitEthernet0/1` |
| `ip address <IP> <subnet>` | Assigns an IP address to the interface | `<IP>`: IP address, `<subnet>`: Subnet mask |
| `no shutdown` | Enables the interface | None |
| `description <text>` | Adds a description to an interface | `<text>`: Description |
| `duplex <full/half/auto>` | Sets the duplex mode | `full`, `half`, `auto` |
| `speed <10/100/1000/auto>` | Sets the interface speed | `10`, `100`, `1000`, `auto` |

---

### **VLAN Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `vlan <VLAN_ID>` | Creates a VLAN and enters VLAN configuration mode | `<VLAN_ID>`: VLAN number (1-4094) |
| `name <VLAN_NAME>` | Assigns a name to a VLAN | `<VLAN_NAME>`: VLAN name |
| `interface <interface>` | Selects an interface to configure VLAN | `<interface>`: e.g., `FastEthernet0/1` |
| `switchport mode access` | Sets the interface as an access port | None |
| `switchport access vlan <VLAN_ID>` | Assigns an interface to a VLAN | `<VLAN_ID>`: VLAN number |
| `switchport mode trunk` | Configures the interface as a trunk port | None |
| `switchport trunk allowed vlan <VLAN_LIST>` | Specifies allowed VLANs on a trunk | `<VLAN_LIST>`: VLAN numbers separated by commas |

---

### **Routing Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip routing` | Enables IP routing on the device | None |
| `ip route <network> <mask> <next-hop>` | Configures a static route | `<network>`: Destination network, `<mask>`: Subnet mask, `<next-hop>`: Next-hop IP or exit interface |
| `router ospf <PROCESS_ID>` | Enables OSPF routing process | `<PROCESS_ID>`: OSPF process number |
| `network <IP> <wildcard> area <AREA>` | Assigns a network to an OSPF area | `<IP>`: Network IP, `<wildcard>`: Wildcard mask, `<AREA>`: Area number |
| `router rip` | Enables RIP routing protocol | None |
| `version 2` | Enables RIP version 2 | None |
| `network <IP>` | Adds a network to the RIP process | `<IP>`: Network address |

---

### **SSH Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `hostname <name>` | Sets the hostname (required for SSH) | `<name>`: Device hostname |
| `ip domain-name <domain>` | Defines a domain name | `<domain>`: Domain name |
| `crypto key generate rsa` | Generates SSH encryption keys | None |
| `ip ssh version 2` | Enables SSH version 2 | None |
| `line vty 0 4` | Configures virtual terminal lines | None |
| `transport input ssh` | Restricts access to SSH only | None |
| `login local` | Requires local authentication | None |
| `username <user> secret <password>` | Creates a user account | `<user>`: Username, `<password>`: Password |

---

### **Access Control Lists (ACLs)**
| Command | Description | Parameters |
|---------|------------|------------|
| `access-list <ID> permit/deny <IP> <wildcard>` | Creates an ACL rule | `<ID>`: ACL number, `<IP>`: Source IP, `<wildcard>`: Wildcard mask |
| `ip access-group <ID> in/out` | Applies ACL to an interface | `<ID>`: ACL number, `in|out`: Traffic direction |
| `access-list <ID> permit/deny any` | Allows or denies all traffic | `<ID>`: ACL number |

---

### **NAT (Network Address Translation)**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip nat inside source list <ACL> interface <INTERFACE> overload` | Configures PAT (NAT overload) | `<ACL>`: ACL number, `<INTERFACE>`: Outside interface |
| `interface <INTERFACE>` | Selects an interface | `<INTERFACE>`: Interface name |
| `ip nat inside` | Marks an interface as inside NAT | None |
| `ip nat outside` | Marks an interface as outside NAT | None |

---

### **DHCP Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip dhcp pool <NAME>` | Creates a DHCP pool | `<NAME>`: Pool name |
| `network <IP> <subnet>` | Defines the network range | `<IP>`: Network address, `<subnet>`: Subnet mask |
| `default-router <IP>` | Assigns the default gateway | `<IP>`: Gateway address |
| `dns-server <IP>` | Assigns a DNS server | `<IP>`: DNS server IP |
| `ip dhcp excluded-address <IP_START> <IP_END>` | Excludes specific addresses from DHCP | `<IP_START> <IP_END>`: Range of excluded IPs |

---

### **STP (Spanning Tree Protocol)**
| Command | Description | Parameters |
|---------|------------|------------|
| `spanning-tree vlan <VLAN_ID> root primary` | Sets the switch as root bridge for a VLAN | `<VLAN_ID>`: VLAN number |
| `spanning-tree mode rapid-pvst` | Enables Rapid PVST+ mode | None |
| `spanning-tree portfast` | Enables PortFast on an interface | None |

---

### **Wireless Configuration (Packet Tracer AP & WLC)**
| Command | Description | Parameters |
|---------|------------|------------|
| `interface Dot11Radio0` | Enters wireless interface | None |
| `ssid <SSID_NAME>` | Sets the SSID | `<SSID_NAME>`: Wireless network name |
| `authentication open` | Enables open authentication | None |
| `encryption mode ciphers aes-ccm` | Enables AES encryption | None |
| `wpa-psk ascii <PASSWORD>` | Configures WPA key | `<PASSWORD>`: Wi-Fi password |

---

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

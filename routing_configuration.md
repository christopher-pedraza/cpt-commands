# Routing Algorithm Configuration Index

This document summarizes essential commands for configuring dynamic routing protocols in Cisco Packet Tracer.

Return to the [main page](README.md) for more topics.

## Routing Protocols Covered
- [RIP (Routing Information Protocol)](#rip-configuration)
- [EIGRP (Enhanced Interior Gateway Routing Protocol)](#eigrp-configuration)
- [OSPF (Open Shortest Path First)](#ospf-configuration)
- [IPv6 Routing](#ipv6-routing-configuration)
  - [Static IPv6 Routing](#static-ipv6-routing)
  - [OSPFv3 (IPv6 OSPF)](#ospfv3-ipv6-ospf)
- [Additional Useful Routing Commands](#additional-useful-routing-commands)

---

## RIP Configuration

| Command | Description | Parameters |
|---------|-------------|------------|
| `router rip` | Enters RIP configuration mode | None |
| `version 2` | Enables RIP version 2 (recommended) | None |
| `network <network>` | Specifies which network(s) to advertise | `<network>`: e.g., `192.168.1.0` |
| `no auto-summary` | Disables automatic summarization | None |
| `show ip protocols` | Displays routing protocol information | None |
| `show ip route rip` | Displays routes learned via RIP | None |

---

## EIGRP Configuration

| Command | Description | Parameters |
|---------|-------------|------------|
| `router eigrp <ASN>` | Enters EIGRP configuration mode | `<ASN>`: Autonomous System Number (e.g., `100`) |
| `network <network>` | Specifies which network(s) to advertise | `<network>`: e.g., `192.168.1.0` |
| `no auto-summary` | Disables automatic summarization | None |
| `show ip protocols` | Displays routing protocol info | None |
| `show ip route eigrp` | Shows EIGRP-learned routes | None |
| `show ip eigrp neighbors` | Shows EIGRP neighbor relationships | None |

---

## OSPF Configuration

| Command | Description | Parameters |
|---------|-------------|------------|
| `router ospf <process_id>` | Enters OSPF router configuration mode | `<process_id>`: Any number (e.g., `1`) |
| `network <IP> <wildcard> area <area_id>` | Advertises a network in a specific OSPF area | `<IP>`: Network IP, `<wildcard>`: Wildcard mask, `<area_id>`: Area number (e.g., `0`) |
| `show ip protocols` | Displays active routing protocols | None |
| `show ip ospf neighbor` | Displays OSPF neighbors | None |
| `show ip route ospf` | Shows routes learned through OSPF | None |
| `show ip ospf` | Displays general OSPF process info | None |

---

## IPv6 Routing Configuration

| Command | Description | Parameters |
|---------|-------------|------------|
| `ipv6 unicast-routing` | Enables IPv6 routing on the router or Layer 3 switch | None |
| `interface <interface>` | Selects an interface to configure | `<interface>`: e.g., `GigabitEthernet0/0` |
| `ipv6 address <ipv6_addr>/<prefix>` | Assigns an IPv6 address to the interface | `<ipv6_addr>`: e.g., `2001:db8:1::1`, `<prefix>`: e.g., `64` |
| `show ipv6 route` | Displays the IPv6 routing table | None |
| `show ipv6 protocols` | Displays IPv6 routing protocol information | None |
| `show ipv6 interface brief` | Displays summary of IPv6-enabled interfaces | None |
| `show ipv6 neighbors` | Displays the IPv6 neighbor cache | None |

### Static IPv6 Routing

| Command | Description | Parameters |
|---------|-------------|------------|
| `ipv6 route <destination> <next-hop>` | Configures a static IPv6 route | `<destination>`: e.g., `2001:db8:2::/64`, `<next-hop>`: e.g., `2001:db8:1::2` |

### OSPFv3 (IPv6 OSPF)

| Command | Description | Parameters |
|---------|-------------|------------|
| `ipv6 router ospf <process_id>` | Enters OSPFv3 configuration mode | `<process_id>`: e.g., `1` |
| `router-id <id>` | Assigns a router ID | `<id>`: e.g., `1.1.1.1` |
| `interface <interface>` | Enters interface mode for OSPFv3 | `<interface>`: e.g., `GigabitEthernet0/0` |
| `ipv6 ospf <process_id> area <area_id>` | Enables OSPFv3 on the interface | `<process_id>`: e.g., `1`, `<area_id>`: e.g., `0` |

---

## Additional Useful Routing Commands

| Command | Description | Parameters |
|---------|-------------|------------|
| `ip routing` | Enables IP routing on Layer 3 devices | None |
| `show ip route` | Shows the IP routing table | None |
| `clear ip route *` | Clears routing table entries | None |

---

Return to the [main page](README.md) for more topics.

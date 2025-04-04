# Routing Algorithm Configuration Commands

This document summarizes essential commands for configuring dynamic routing protocols in Cisco Packet Tracer.

Return to the [main page](README.md) for more topics.

## Routing Protocols Covered
- [RIP (Routing Information Protocol)](#rip-configuration)
- [EIGRP (Enhanced Interior Gateway Routing Protocol)](#eigrp-configuration)
- [OSPF (Open Shortest Path First)](#ospf-configuration)

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

## Additional Useful Routing Commands

| Command | Description | Parameters |
|---------|-------------|------------|
| `ip routing` | Enables IP routing on Layer 3 devices | None |
| `show ip route` | Shows the IP routing table | None |
| `clear ip route *` | Clears routing table entries | None |

---

Return to the [main page](README.md) for more topics.

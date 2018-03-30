module.exports = (internal = false) => {
  const interfaces = require('os').networkInterfaces();
  const names = Object.keys(interfaces);

  return names.reduce((res, name) => {
    const iface = interfaces[name][0];
    if (iface && (internal || !iface.internal)) {
      return [...res, iface.mac];
    } else {
      return res;
    }
  }, []);
};

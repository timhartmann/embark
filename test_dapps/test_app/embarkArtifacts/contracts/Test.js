import EmbarkJS from '../embarkjs';
let TestJSONConfig = {"contract_name":{"onDeploy":["Test.methods.changeAddress('$MyToken')","Test.methods.changeENS('embark.eth')"],"className":"Test","args":[],"code":"608060405234801561001057600080fd5b50610272806100206000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582018f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a350029","runtimeBytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582018f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a350029","realRuntimeBytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820","linkReferences":{"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/app/contracts/test.sol":{"ZAMyLib":[{"length":20,"start":403}]}},"swarmHash":"18f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a35","gasEstimates":{"creation":{"codeDepositCost":"125200","executionCost":"171","totalCost":"125371"},"external":{"addr()":"581","changeAddress(address)":"20613","changeENS(address)":"20525","ens()":"559","testAdd()":"infinite"}},"functionHashes":{"addr()":"767800de","changeAddress(address)":"fe64d6ff","changeENS(address)":"107b6b0c","ens()":"3f15457f","testAdd()":"ae40f72f"},"abiDefinition":[{"constant":false,"inputs":[{"name":"_ens","type":"address"}],"name":"changeENS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x107b6b0c"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3f15457f"},{"constant":true,"inputs":[],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x767800de"},{"constant":true,"inputs":[],"name":"testAdd","outputs":[{"name":"_result","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0xae40f72f"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"changeAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfe64d6ff"}],"filename":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/app/contracts/test.sol","originalFilename":"app/contracts/test.sol","path":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/app/contracts/test.sol","gas":"auto","type":"file","deploy":true,"_gasLimit":6000000,"error":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3","realArgs":[],"address":"0x49b71966a123d07E41df95CF8446032F1A4401da","deployedAddress":"0x49b71966a123d07E41df95CF8446032F1A4401da"},"address":"0x49b71966a123d07E41df95CF8446032F1A4401da","code":"608060405234801561001057600080fd5b50610272806100206000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582018f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a350029","runtime_bytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582018f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a350029","real_runtime_bytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663107b6b0c81146100715780633f15457f14610094578063767800de146100c5578063ae40f72f146100da578063fe64d6ff14610101575b600080fd5b34801561007d57600080fd5b50610092600160a060020a0360043516610122565b005b3480156100a057600080fd5b506100a9610151565b60408051600160a060020a039092168252519081900360200190f35b3480156100d157600080fd5b506100a9610160565b3480156100e657600080fd5b506100ef61016f565b60408051918252519081900360200190f35b34801561010d57600080fd5b50610092600160a060020a0360043516610217565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600154600160a060020a031681565b600054600160a060020a031681565b600073__/Users/iurimatias/Projects/Status/em__63771602f7600160026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b1580156101e657600080fd5b505af41580156101fa573d6000803e3d6000fd5b505050506040513d602081101561021057600080fd5b5051905090565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820","swarm_hash":"18f2e06136f1109238b22928aa1b5efe6f8b4ec3c20cdf722b7e1b8c6fa32a35","gas_estimates":{"creation":{"codeDepositCost":"125200","executionCost":"171","totalCost":"125371"},"external":{"addr()":"581","changeAddress(address)":"20613","changeENS(address)":"20525","ens()":"559","testAdd()":"infinite"}},"function_hashes":{"addr()":"767800de","changeAddress(address)":"fe64d6ff","changeENS(address)":"107b6b0c","ens()":"3f15457f","testAdd()":"ae40f72f"},"abi":[{"constant":false,"inputs":[{"name":"_ens","type":"address"}],"name":"changeENS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x107b6b0c"},{"constant":true,"inputs":[],"name":"ens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3f15457f"},{"constant":true,"inputs":[],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x767800de"},{"constant":true,"inputs":[],"name":"testAdd","outputs":[{"name":"_result","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0xae40f72f"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"changeAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfe64d6ff"}]};
let Test = new EmbarkJS.Blockchain.Contract(TestJSONConfig);
export default Test;
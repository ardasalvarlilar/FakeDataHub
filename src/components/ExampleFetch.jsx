import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'

export default function ExampleFetch() {
  const [copied, setCopied] = useState(false);
  const fetchCode = `
    const request = await axios.get('http://127.0.0.1:8000/users');
    const response = request.data;
  `;
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className='px-24 py-8 bg-slate-200'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Lorem ipsum data can not satisfy anymore?</h1>
      <p>FakeDataHub allows you to practice real-life asynchronous operations by making requests to different endpoints. It provides the opportunity to develop without the need for a backend, using your preferred frontend framework. This can be particularly useful if you are conducting educational sessions🙃, teaching the intricacies of frontend development, including asynchronous operations using fetch.</p>
      <h3 className='my-3 text-lg font-bold'>Example useage with axios</h3>
      <pre className='px-1 py-3 text-lg text-white bg-black rounded-sm'>
        <code>
          <span className='text-[#f89a28]'>const</span> <span className='text-[#fff]'>request</span> = <span className='text-[#f89a28]'>await</span> <span className='text-[#DC84F3]'>axios</span>
          <span className='text-[#fff]'>.get</span><span className='text-[#f89a28]'>(</span><span className='text-green-600'>"http://127.0.0.1:8000/users"</span><span className='text-[#f89a28]'>)</span><br />
          <span className='text-[#f89a28]'>const</span> <span className='text-[#fff]'>response</span> = <span className='text-[#DC84F3]'>request</span>.<span className='text-[#F3CCF3]'>data</span>
        </code>
      </pre>

      <div className='flex items-center gap-4'>
        <CopyToClipboard text={fetchCode} onCopy={handleCopy}>
          <button className='border border-[#f89a28] rounded-md px-3 py-1 my-2 hover:bg-[#f89a28] hover:text-white hover:border-black transition-all'>Copy</button>
        </CopyToClipboard>
        {copied && <p className='m-0 text-green-600'>Copied to clipboard!</p>}
      </div>
    </div>
  )
}

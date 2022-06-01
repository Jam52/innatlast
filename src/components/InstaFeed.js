import styled from 'styled-components';

const IntaFeed = () => {
  return (
    <Wrapper>
      <script type="text/javascript">
        {(function () {
          var i,
            e,
            d = document,
            s = 'script';
          i = d.createElement('script');
          i.async = 1;
          i.charset = 'UTF-8';
          i.src =
            'https://cdn.curator.io/published/a78b65b7-d984-4889-9464-324aba22ec35.js';
          e = d.getElementsByTagName(s)[0];
          e.parentNode.insertBefore(i, e);
        })()}
        ;{' '}
      </script>
      <div id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          rel="noreferrer"
          class="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.picture``;

export default IntaFeed;
